import { Injectable } from '@angular/core';
import { Color, Item, Size } from '../interfaces/item.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  getItemsData(): Item[] {
    return [
      {
        available: true,
        color: Color.red,
        name: 'Red Shirt',
        size: Size.medium,
      },
      {
        available: false,
        color: Color.black,
        name: 'Black Hat',
        size: Size.small,
      },
      {
        available: true,
        color: Color.blue,
        name: 'Blue Jeans',
        size: Size.large,
      },
      {
        available: true,
        color: Color.green,
        name: 'Green Jacket',
        size: Size.medium,
      },
      {
        available: false,
        color: Color.red,
        name: 'Red Socks',
        size: Size.small,
      },
      {
        available: true,
        color: Color.black,
        name: 'Black Shoes',
        size: Size.large,
      },
      {
        available: true,
        color: Color.blue,
        name: 'Blue Scarf',
        size: Size.medium,
      },
      {
        available: false,
        color: Color.green,
        name: 'Green Gloves',
        size: Size.small,
      },
      { available: true, color: Color.red, name: 'Red Cap', size: Size.large },
      {
        available: true,
        color: Color.black,
        name: 'Black Belt',
        size: Size.medium,
      },
    ];
  }

  getItems() {
    return of(this.getItemsData());
  }
}
