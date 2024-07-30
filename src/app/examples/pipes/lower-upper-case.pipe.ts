import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerUpperCase',
})
export class LowerUpperCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
