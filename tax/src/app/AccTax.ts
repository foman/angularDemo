import { TaxLevel, CreateTaxLevel } from './TaxLevel';
import { TaxLevelResult } from './TaxLevelResult';
import { AcculatedTaxTable19 } from './AcculatedTaxTable19';
import { ITaxTable } from './ITaxTable';

export class AccTax {
    accumulatedTaxedIncome = 0;
    taxLevels: TaxLevel[] = [];
    taxTable: ITaxTable;
    accumlatedIncome = 0;
    socailFlareRate = 0;

    load(flareRate: number) {
        this.taxTable = new AcculatedTaxTable19();
        for (const level of this.taxTable.texLevels) {
            this.taxLevels.push(CreateTaxLevel(level));
        }

        this.socailFlareRate = flareRate;
    }

    getTaxLevels(): TaxLevel[] {
        return this.taxLevels;
    }

    calculate(m: number) {
        const deductedIncome = this.getTaxDeduction(m);
        this.accumulatedTaxedIncome += deductedIncome;
        this.accumlatedIncome += m;
        console.log(this.accumlatedIncome);
        return this.calculateAcculatedCore(deductedIncome);
    }

    calculateAcculatedCore(m: number) {
        const appliedLevel = this.getTheRightTaxLevel(this.accumulatedTaxedIncome);
        const result = new TaxLevelResult();
        result.level = appliedLevel;
        result.paidTax = appliedLevel.rate * m;
        result.accIncome = this.accumlatedIncome;
        return result;
    }

    getTaxDeduction(m: number) {
        return m * (1 - this.socailFlareRate) - this.taxTable.deduction;
    }

    clear() {
        this.accumlatedIncome = 0;
        this.accumulatedTaxedIncome = 0;
    }

    getTheRightTaxLevel(m: number) {
        for (const level of this.taxLevels) {
            if (level.maximum > m) {
                return level;
            }
        }

        throw new Error('No tex level applied');
    }
}
