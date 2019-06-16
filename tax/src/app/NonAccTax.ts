import { TaxLevel, CreateTaxLevel } from './TaxLevel';
import { TaxLevelResult } from './TaxLevelResult';
import { AcculatedTaxTable19 } from './AcculatedTaxTable19';
import { ITaxTable } from './ITaxTable';
import { BonusTaxTable19 } from './BonusTaxTable19';

export class NonAccTax {
    accumulatedIncome: 0;
    taxLevels: TaxLevel[] = [];
    taxTable: ITaxTable;

    load() {
        this.taxTable = new BonusTaxTable19();
        for (const level of this.taxTable.texLevels) {
            this.taxLevels.push(CreateTaxLevel(level));
        }
    }

    getTaxLevels(): TaxLevel[] {
        return this.taxLevels;
    }

    calculate(m: number) {
        let paidTax = 0;
        for (const level of this.taxLevels) {
            if (level.minimum < m) {
                if (level.maximum < m) {
                    paidTax += (level.maximum - level.minimum) * level.rate;
                }
                else {
                    paidTax += (m - level.minimum) * level.rate;
                }
            }
        }

        let result = new TaxLevelResult();
        result.level = new TaxLevel(0, 0, 0);
        result.paidTax = paidTax;
        return result;
    }

    clear() {
        this.accumulatedIncome = 0;
    }
}
