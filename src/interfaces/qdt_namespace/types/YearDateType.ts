export class YearDateType {
    readonly Year: string | undefined;

    constructor(year?: string | number ) {
        if (year) {
            if (typeof year === 'string') {
                this.Year = year;
            } else if (typeof year === 'number') {
                if (year > 0 && year <= 9999) {
                    this.Year = `${year}`.padStart(4, '0');
                }
            }
        }
    }
}