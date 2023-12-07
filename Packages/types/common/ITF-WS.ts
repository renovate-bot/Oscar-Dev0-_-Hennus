import { ConstructorOptions } from "eventemitter2";
import { _Omit } from "../assets";


export interface HennusSocketOptions {

    events?: _Omit<ConstructorOptions, "wildcard"  | "delimiter" | "ignoreErrors" | "verboseMemoryLeak" >;

};