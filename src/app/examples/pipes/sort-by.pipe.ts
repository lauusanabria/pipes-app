import { Pipe, PipeTransform } from '@angular/core';
import { Color, Item } from '../interfaces/item.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(
    items: Item[],
    sortBy?: keyof Item | '',
    sortDirection: 'ASC' | 'DESC' = 'ASC'
  ): Item[] {
    if (!sortBy) return items;
    const factor = sortDirection === 'ASC' ? 1 : -1;
    return items.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return this.compare(a.name, b.name, factor);
        case 'color':
          return this.compare(Color[a.color], Color[b.color], factor);
        case 'size':
          return this.compare(a.size, b.size, factor);
        case 'available':
          return this.compare(a.available, b.available, factor);
        default:
          return 0;
      }
    });
  }

  compare(a: any, b: any, factor: number): number {
    if (a > b) return 1 * factor;
    if (a < b) return -1 * factor;
    return 0;
  }
}
