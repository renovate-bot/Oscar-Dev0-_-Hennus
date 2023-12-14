import axios from "axios"
import { Client } from "../client"

export class ModelsBase<T = any> {
  public data: T
  public client: Client
  constructor(_d: T, _c: Client) {
    Object.defineProperty(this, "data", { value: _d })
    Object.defineProperty(this, "client", { value: _c })
  }

  public toJSON() {
    return this.data
  }

  async imagen(_url?: string) {
    if (!_url) return undefined
    try {
      const header = [
        "image/jpeg",
        "image/gif",
        "image/png",
        "image/x-icon",
        "imagen/webp",
        "image/webp",
      ]
      const url = await axios(_url, { responseType: "arraybuffer" })
      let type = url.headers["content-type"] || url.headers["Content-Type"]

      if (url.status == 200 && header.includes(type)) {
        let _type
        if (type === "image/jpeg") _type = "jpeg"
        else if (type === "image/gif") _type = "gif"
        else if (type === "image/png") _type = "png"
        else if (type === "image/x-icon") _type = "ico"
        else if (type === "image/webp" || type === "imagen/webp") {
          _type = "webp"
        }

        return {
          data: url.data,
          url: _url,
          type: _type as "jpeg" | "gif" | "png" | "ico" | "webp",
          content_type: type,
        }
      }
      return undefined
    } catch {
      return undefined
    }
  }
}
