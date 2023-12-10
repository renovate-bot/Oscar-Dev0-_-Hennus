import { APIEmoji, APIMessageComponentEmoji, APIPartialEmoji } from "@discordjs/core";

const encode =/[\u{1F600}-\u{1F64F}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{1F1E0}-\u{1F1FF}]/ug;
const regex = RegExp(encode);

function decodeEmoji(text: string): APIMessageComponentEmoji {
    if (text.includes('%')) text = decodeURIComponent(text);

    if (!text.includes(':') && regex.test(text)) return { animated: undefined, name: text, id: undefined };

    const emojiMap = text.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
    if (emojiMap) return { animated: Boolean(emojiMap[1]), name: emojiMap[2], id: emojiMap[3] };
    return { animated: undefined, name: undefined, id: undefined }
};

function resolvePartialEmoji(emoji: APIMessageComponentEmoji | string): APIMessageComponentEmoji | undefined {
    if (!emoji) return undefined;
    if (typeof emoji === 'string') return regex.test(emoji) ? { id: undefined , name: (emoji.match(encode) ?? [])[0] ?? "" } : decodeEmoji(emoji);

    const { id, name, animated } = emoji;
    if (!id && !name) return undefined;


    return { id, name, animated: Boolean(animated) };
};

export { resolvePartialEmoji, decodeEmoji };