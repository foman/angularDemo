import { ITaxTable } from './ITaxTable';

export class BonusTaxTable19 implements ITaxTable {
    deduction = 0;
    texLevels = [
        {
            'rate': 0.03,
            "minimum": 0,
            "maximum": 3000
        },
        {
            "rate": 0.1,
            "minimum": 3000,
            "maximum": 12000
        },
        {
            "rate": 0.2,
            "minimum": 12000,
            "maximum": 25000
        },
        {
            "rate": 0.25,
            "minimum": 25000,
            "maximum": 35000
        },
        {
            "rate": 0.30,
            "minimum": 35000,
            "maximum": 55000
        },
        {
            "rate": 0.35,
            "minimum": 55000,
            "maximum": 80000
        },
        {
            "rate": 0.40,
            "minimum": 80000,
            "maximum": Number.MAX_VALUE
        }
    ];
}