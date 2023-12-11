import { APINewsChannel, APITextChannel, RESTPostAPIChannelMessageJSONBody } from "@discordjs/core";
import { Client, BaseGuildChannel, MessageChannelCreate, Message } from "..";
import { RawFile } from '@discordjs/rest';
export class GuildTextChannel extends BaseGuildChannel<APITextChannel | APINewsChannel> {
    constructor(client: Client, data: APITextChannel | APINewsChannel){
        super(client, data);
    };

    


    async send(options: MessageChannelCreate){
        try {
            let data: RESTPostAPIChannelMessageJSONBody & {
                files?: RawFile[];
            } = {}
            if(typeof options == "string") data["content"] = options;
            else if(typeof options == "object") {
                data = { ...options };
                if (options.attachments && Array.isArray(options.attachments)) {
                    data.files = [];
    
                    const from: RawFile[] = [];
                    for (let i = 0; i < options.attachments.length; i++) {
                        const attach = options.attachments[i];
                        let contentType =  ""
    
                        let _buffer: Buffer | string | undefined = undefined;
                        let name: string = `default${i}.txt`;
                        if (typeof attach.attachment == "string") {
                            const imagen = await this.imagen(attach.attachment);
                            if (imagen) {
                                const buffer = Buffer.from(imagen.data, 'binary');
                                _buffer = buffer;
                                name = attach.filename ?? `default.${imagen.type}`;
                                contentType = imagen.content_type;
                            };
                        } else { _buffer = attach.attachment as Buffer; name = attach.filename ?? `default${i}.txt`; };
    
                        if (_buffer) from.push({
                            data: _buffer,
                            name,
                            contentType
                        });
                    };
                    data.files = from;
                };
            };
            const msg = await this.client.api.channels.createMessage(this.id, data);
            const format = new Message(this.client, msg);
            return format;
        } catch (error) {
            throw error;
        };
    };


};