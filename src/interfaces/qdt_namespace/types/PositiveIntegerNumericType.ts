export class PositiveIntegerNumericType {
    readonly Value: number | undefined;

    constructor(value?: number) {
        if (value && value > 0 && Number.isInteger(value)) {
            this.Value = value;
        }
    }
}