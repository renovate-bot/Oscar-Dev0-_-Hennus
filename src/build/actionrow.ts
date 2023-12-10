import { APIActionRowComponent } from "@discordjs/core";
import { ButtonsBuilder , SelectMenuBuilder, TextInputBuilder} from "..";

export type ComponentFormats = ButtonsBuilder | SelectMenuBuilder | TextInputBuilder;

export class ActionRowBuilder<T extends ComponentFormats = any> implements APIActionRowComponent<T>{
    public type = 1;
    public components: T[] = [];

    constructor(options?: ComponentFormats[]) {
        if (options) {
            this.save(options);
        };
    };

    public AddComponents(components: ComponentFormats[]): this {
        this.save(components);
        return this;
    }

    public AddComponent(component: ComponentFormats): this {
        this.save([component]);
        return this;
    }

    private save(components: ComponentFormats[]): void {
        //@ts-ignore
        this.components.push(...components);
    }
}
