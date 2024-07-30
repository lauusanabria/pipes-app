import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styles: ``,
})
export class CustomPageComponent implements OnInit {
  public txt = 'Hello, World! How are you today?';
  public toUpperCase: boolean = false;
  public items: Item[] = [];
  public sortBy: keyof Item | undefined;
  public sortDirection: 'ASC' | 'DESC' = 'ASC';

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((items) => (this.items = items));
  }

  changeOrder(value: keyof Item) {
    if (this.sortBy === value) {
      this.changeSortDirection();
    } else {
      this.sortBy = value;
      this.sortDirection = 'ASC';
    }
  }

  changeSortDirection() {
    this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
  }
}
