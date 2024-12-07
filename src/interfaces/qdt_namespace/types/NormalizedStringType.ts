export class NormalizedStringType {
    readonly Value: string | undefined;

    constructor(value?: string) {
        if (value) {
            this.Value = value.replace((/  |\r\n|\n|\r/gm),"");
        }
    }
}