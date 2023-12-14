import {
  RESTPatchAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageJSONBody,
} from "@discordjs/core"
import {
  _Omit,
  Client,
  MessageChannelCreate,
  MessageOptions,
  ModelsBase,
} from ".."
import { RawFile } from "@discordjs/rest"

export class Message extends ModelsBase<MessageOptions> {
  constructor(client: Client, data: MessageOptions) {
    super(data, client)
  }

  get id() {
    return this.data.id
  }

  get type() {
    return this.data.type
  }

  get content() {
    return this.data.content
  }

  get mention() {
    return {
      users: this.data.mentions,
      everyone: this.data.mention_everyone,
      channels: this.data.mention_channels,
      roles: this.data.mention_roles,
    }
  }

  get member(): MessageOptions["member"] {
    return this.data?.member
  }

  get user() {
    return this.data.author
  }

  get flags() {
    return this.data.flags
  }

  get guildID(): MessageOptions["guild_id"] {
    return this.data?.guild_id
  }

  get channelID() {
    return this.data.channel_id
  }

  async reply(options: MessageChannelCreate) {
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
      const msg = await this.client.api.channels.createMessage(
        this.channelID,
        data,
      )
      const format = new Message(this.client, msg)
      return format
    } catch (error) {
      throw error
    }
  }

  async delete(reason?: string) {
    try {
      await this.client.api.channels.deleteMessage(this.channelID, this.id, {
        reason,
      })
      return this
    } catch (error) {
      throw error
    }
  }

  async edit(options: MessageChannelCreate) {
    try {
      let data: RESTPatchAPIChannelMessageJSONBody & {
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
      const msg = await this.client.api.channels.editMessage(
        this.channelID,
        this.id,
        data,
      )
      const format = new Message(this.client, msg)
      return format
    } catch (error) {
      throw error
    }
  }

  get isPinned() {
    return this.data.pinned
  }

  async pin(reason?: string) {
    try {
      await this.client.api.channels.pinMessage(this.channelID, this.id, {
        reason,
      })
      return this
    } catch (error) {
      throw error
    }
  }

  toString() {
    return this.id
  }
}
