import { Pipe, PipeTransform } from '@angular/core';

import { Color } from '../interfaces/item.interface';

@Pipe({
  name: 'colorName',
})
export class ColorNamePipe implements PipeTransform {
  transform(color: Color): string {
    return Color[color];
  }
}
