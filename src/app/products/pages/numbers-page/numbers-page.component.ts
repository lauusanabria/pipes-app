import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.scss',
})
export class NumbersPageComponent {
  public defaultNumber = 123456.7891;
  parseValueToInt(value: string): number {
    return parseInt(value);
  }
}
