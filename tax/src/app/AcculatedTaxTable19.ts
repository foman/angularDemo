import { ITaxTable } from './ITaxTable';

export class AcculatedTaxTable19 implements ITaxTable {
    constructor() {
    }
    deduction = 5000;
    texLevels = [
        {
            "rate": 0.00,
            "minimum": Number.NEGATIVE_INFINITY,
            'maximum': 0
        },
        {
            "rate": 0.03,
            "minimum": 0,
            "maximum": 36000
        },
        {
            "rate": 0.1,
            "minimum": 36000,
            "maximum": 144000
        },
        {
            "rate": 0.20,
            "minimum": 1440000,
            "maximum": 3000000
        },
        {
            "rate": 0.25,
            "minimum": 300000,
            "maximum": 420000
        },
        {
            "rate": 0.30,
            "minimum": 420000,
            "maximum": 660000
        },
        {
            "rate": 0.35,
            "minimum": 660000,
            "maximum": 960000
        },
        {
            "rate": 0.45,
            "minimum": 960000,
            "maximum": Number.MAX_VALUE
        }
    ];
}
