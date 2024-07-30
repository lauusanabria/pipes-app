import { Pipe, PipeTransform } from '@angular/core';

// jane doe | toggleCase = 'JANE DOE'
// JANE DOE | toggleCase = 'jane doe'

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string): string {
    let toggledString = '';
    Array.from(value).forEach((char) => {
      if (char === char.toLowerCase()) {
        toggledString += char.toUpperCase();
      } else if (char === char.toUpperCase()) {
        toggledString += char.toLowerCase();
      } else {
        toggledString += char;
      }
    });
    return toggledString;
  }
}
