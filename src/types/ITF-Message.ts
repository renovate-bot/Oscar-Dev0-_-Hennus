import { MessageFlags, RESTPostAPIChannelMessageJSONBody } from "@discordjs/core";
import { ActionRowBuilder, AttachmentBuilder, EmbedBuilder, _Omit } from "..";

type OmitMessage = _Omit<RESTPostAPIChannelMessageJSONBody, "embeds" | "components" | "attachments"> & {
    flags?: MessageFlags;
    ephemeral?: boolean;
};


export interface MessageOptionsCreate extends OmitMessage {
    embeds?: EmbedBuilder[];
    components?: ActionRowBuilder[];
    attachments?: AttachmentBuilder[];
};


export type MessageChannelCreate = _Omit<MessageOptionsCreate, "flags" | "ephemeral"> | string;
export type MessageInteractionCreate = _Omit<MessageOptionsCreate, "tts" | "allowed_mentions"> | string;