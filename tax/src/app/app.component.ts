import { Component } from '@angular/core';
import { TaxTable } from './TaxTable';
import { Tax18 } from './Tax18';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tax';
  taxTable18: TaxTable = new TaxTable();
  earns: number;
  paidTaxes: number[] = [];
  totalTax: number = 0;
  Max_Value = Number.MAX_VALUE;

  constructor() {
    this.taxTable18.load(Tax18);
  }

  onCompute() {
    this.paidTaxes = this.taxTable18.calculate(this.earns);
    this.totalTax = 0;
    for (let i in this.paidTaxes) {
      this.totalTax += this.paidTaxes[i];
    }
  }
}
