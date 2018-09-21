export class TaxLevel {
    rate: number;
    minimum: number;
    maximum: number;
    fullLevelTax: number;

    constructor(rate: number, minimum: number, maximum: number) {
        this.rate = rate;
        this.minimum = minimum;
        this.maximum = maximum;
        this.fullLevelTax = (maximum - minimum) * rate;
    }



    calculate(m: number) {
        if (m > this.maximum) {
            return this.fullLevelTax;
        }
        else if (m > this.minimum) {
            return (m - this.minimum) * this.rate;
        }
        else {
            return 0;
        }
    }
}

export function CreateTaxLevel(level: any) {
    return new TaxLevel(level.rate, level.minimum, level.maximum);
}