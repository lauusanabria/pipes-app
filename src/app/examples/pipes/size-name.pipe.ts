import { Pipe, PipeTransform } from '@angular/core';

import { Size } from '../interfaces/item.interface';

@Pipe({
  name: 'sizeName',
})
export class SizeNamePipe implements PipeTransform {
  transform(size: Size): string {
    return Size[size];
  }
}
