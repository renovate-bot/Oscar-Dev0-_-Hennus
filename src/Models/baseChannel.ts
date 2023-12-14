import {
  APIChannel,
  APIGuildCategoryChannel,
  APIGuildForumChannel,
  APIGuildMediaChannel,
  APIGuildStageVoiceChannel,
  APIGuildVoiceChannel,
  APINewsChannel,
  APITextChannel,
  APIThreadChannel,
  ChannelType,
  RESTPatchAPIChannelJSONBody,
  RESTPostAPIChannelMessageJSONBody,
} from "@discordjs/core"
import { channelMention } from "@discordjs/formatters"
import { DiscordSnowflake } from "@sapphire/snowflake"
import {
  ChannelBitField,
  Client,
  GuildTextChannel,
  Message,
  MessageChannelCreate,
  ModelsBase,
  PermissionBitField,
} from ".."
import { RawFile } from "@discordjs/rest"

export class BaseChannel<T extends APIChannel> extends ModelsBase<T> {
  constructor(client: Client, data: T) {
    super(data, client)
  }

  get id() {
    return this.data.id
  }

  get type() {
    return this.data.type
  }

  get flags() {
    return new ChannelBitField(this.data.flags).freeze()
  }

  get createdTimestamp() {
    return DiscordSnowflake.timestampFrom(this.id)
  }

  get createdAt() {
    return new Date(this.createdTimestamp)
  }

  isTextBased(): this is GuildTextChannel {
    return "messages" in this
  }

  isVoiceBased() {
    return "bitrate" in this
  }

  isDMBased() {
    return [ChannelType.DM, ChannelType.GroupDM].includes(this.type)
  }

  isThread() {
    return [
      ChannelType.PublicThread,
      ChannelType.PrivateThread,
      ChannelType.AnnouncementThread,
    ].includes(this.type)
  }

  isThreadOnly() {
    return "availableTags" in this
  }

  toString() {
    return channelMention(this.id)
  }

  async delete() {
    await this.client.api.channels.delete(this.id)
    return this
  }

  async send(options: MessageChannelCreate) {
    try {
      let data: RESTPostAPIChannelMessageJSONBody & {
        files?: RawFile[]
      } = {}
      if (typeof options == "string") data["content"] = options
      else if (typeof options == "object") {
        data = { ...options }
        if (options.attachments && Array.isArray(options.attachments)) {
          data.files = []

          const from: RawFile[] = []
          for (let i = 0; i < options.attachments.length; i++) {
            const attach = options.attachments[i]
            let contentType = ""

            let _buffer: Buffer | string | undefined = undefined
            let name: string = `default${i}.txt`
            if (typeof attach.attachment == "string") {
              const imagen = await this.imagen(attach.attachment)
              if (imagen) {
                const buffer = Buffer.from(imagen.data, "binary")
                _buffer = buffer
                name = attach.filename ?? `default.${imagen.type}`
                contentType = imagen.content_type
              }
            } else {
              _buffer = attach.attachment as Buffer
              name = attach.filename ?? `default${i}.txt`
            }

            if (_buffer) {
              from.push({
                data: _buffer,
                name,
                contentType,
              })
            }
          }
          data.files = from
        }
      }
      const msg = await this.client.api.channels.createMessage(this.id, data)
      const format = new Message(this.client, msg)
      return format
    } catch (error) {
      throw error
    }
  }
}

export class BaseGuildChannel<
  T extends
    | APITextChannel
    | APINewsChannel
    | APIGuildVoiceChannel
    | APIGuildStageVoiceChannel
    | APIGuildCategoryChannel
    | APIThreadChannel
    | APIGuildForumChannel
    | APIGuildMediaChannel,
> extends BaseChannel<T> {
  constructor(client: Client, data: T) {
    super(client, data)
  }

  get parent() {
    return this.data.parent_id
  }

  get position() {
    return this.data.position
  }

  get name() {
    return this.data.name
  }

  get permision() {
    return this.data.permission_overwrites?.map((
      { id, type, deny, allow },
    ) => ({
      id,
      type,
      deny: new PermissionBitField(deny).freeze(),
      allow: new PermissionBitField(allow).freeze(),
    }))
  }

  get nsfw() {
    return this.data.nsfw
  }

  get guildId() {
    return this.data.guild_id
  }

  async edit(options: RESTPatchAPIChannelJSONBody) {
    const data = await this.client.api.channels.edit(this.id, options)
    if (data) Object.defineProperty(this, "data", { value: data })
    return this
  }
}
