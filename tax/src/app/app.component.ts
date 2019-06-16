import { Component } from '@angular/core';
import { AccTax } from './AccTax';
import { TaxLevelResult } from './TaxLevelResult';
import { TaxLevel } from './TaxLevel';
import { NonAccTax } from './NonAccTax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tax';
  bonuxTax: NonAccTax = new NonAccTax();
  accTax: AccTax = new AccTax();
  paidTaxes: number[] = [];
  paidAccumlatedTaxes: TaxLevelResult[] = [];
  totalTax = 0;
  Max_Value = Number.MAX_VALUE;
  monthlyEarns: 0;
  bonus = 0;
  bonusTax: TaxLevelResult;
  socialFlareRate = 0.175;

  constructor() {
    this.bonuxTax.load();
    this.accTax.load(this.socialFlareRate);
    this.bonusTax = null;
  }

  clear() {
    this.paidAccumlatedTaxes = [];
    this.totalTax = 0;
    this.accTax.clear();
    this.bonusTax = null;
  }

  onCompute() {
    this.clear();
    for (let i = 0; i < 12; i++) {
      const result = this.accTax.calculate(this.monthlyEarns);
      this.totalTax += result.paidTax;
      this.paidAccumlatedTaxes.push(result);
    }

    this.bonusTax = this.bonuxTax.calculate(this.bonus / 12);
    this.bonusTax.accIncome = this.accTax.accumlatedIncome + this.bonus;
    this.totalTax += this.bonusTax.paidTax;
  }
}
