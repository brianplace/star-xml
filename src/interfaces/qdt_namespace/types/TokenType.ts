export class TokenType {
    readonly Value: string | undefined;

    constructor(value?: string) {
        if (value) {
            let formattedValue = value.replace((/  |\r\n|\n|\r/gm),"");

            while (formattedValue.length > 0 && formattedValue[0] === ' ') {
                formattedValue = formattedValue.substring(1);
            }

            while (formattedValue.length > 0 && formattedValue[formattedValue.length - 1] === ' ') {
                formattedValue = formattedValue.substring(0, formattedValue.length - 2);
            }

            while (formattedValue.length > 0 && formattedValue.indexOf('  ') > -1) {
                formattedValue = formattedValue.replace('  ', '');
            }

            this.Value = value;
        }
    }
}