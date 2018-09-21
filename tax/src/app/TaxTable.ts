import { TaxLevel, CreateTaxLevel } from './TaxLevel';
export class TaxTable {
    taxLevels: TaxLevel[] = [];

    load(levels: any) {
        for (let level of levels) {
            this.taxLevels.push(CreateTaxLevel(level));
        }
    }

    getTaxLevels(): TaxLevel[] {
        return this.taxLevels;
    }

    calculate(m: number) {
        var paidTaxes = [];
        for (let level of this.taxLevels) {
            paidTaxes.push(level.calculate(m));
        }

        return paidTaxes;
    }
}