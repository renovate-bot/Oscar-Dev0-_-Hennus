import { RESTAPIAttachment } from '@discordjs/core';
import { Stream } from 'node:stream';

class AttachmentBuilder implements RESTAPIAttachment {
  constructor(attachment: Buffer | string | Stream, data: RESTAPIAttachment) {
    this.attachment = attachment;
    this.description = data.description;
    this.filename = data.filename;
    this.id = data.id;
  };
  id: string | number;
  public attachment: Buffer | string | Stream;
  description?: string | undefined;
  filename?: string | undefined;
  private isSpoiler: boolean = false;

  setDescription(description: string): this {
    this.description = description;
    return this;
  };

  setFile(attachment: Buffer | string | Stream, name?: string): this {
    this.attachment = attachment;
    this.filename = name || undefined;
    return this;
  };

  setName(name: string): this {
    this.filename = name;
    return this;
  };

  setSpoiler(spoiler: boolean = true): this {
    if (this.isSpoiler === spoiler) return this;
    this.isSpoiler = spoiler;
    this.filename = spoiler ? `SPOILER_${this.filename || ''}` : this.filename?.replace(/^SPOILER_/, '') || undefined;
    return this;
  };
}

export {
  AttachmentBuilder
};
