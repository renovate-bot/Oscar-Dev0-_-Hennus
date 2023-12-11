export * from "./Message";


export * from "./baseModels";
export * from "./baseChannel";

import { DMChannel, GroupDMChannel } from "./Dmchannel";

export type Channel = DMChannel | GroupDMChannel; 

export { GroupDMChannel, DMChannel }