import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

interface Person {
  name: string;
  gender: 'male' | 'female' | 'other';
}

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public peopleList: Person[] = [
    { name: 'Jane', gender: 'female' },
    { name: 'John', gender: 'male' },
    { name: 'Alex', gender: 'other' },
  ];
  public currentPersonIndex: number = 0;
  public titleMap = {
    male: 'Mr',
    female: 'Ms',
    other: 'Mx',
  };
  public spanishWelcomeMap = {
    male: 'Bienvenido',
    female: 'Bienvenida',
    other: 'Bienvenidx',
  };

  switchPerson(): void {
    this.currentPersonIndex =
      this.currentPersonIndex === this.peopleList.length - 1
        ? 0
        : this.currentPersonIndex + 1;
  }

  // i18 Plural
  public clientList: Person[] = [...this.peopleList];
  public clientsMap = {
    '=0': 'are no clients',
    '=1': 'is 1 client',
    other: 'are # clients',
  };

  removeClient() {
    this.clientList.shift();
  }

  resetClientList() {
    this.clientList = [...this.peopleList];
  }

  // slice pipe
  public getNames(): string[] {
    return [...this.clientList.map((client) => client.name), 'Sam', 'Drew'];
  }

  // Async pipe
  // observable: async pipe will unsubscribe from it automatically
  public timer: Observable<number> = interval(2000);

  // promise cannot be cancelled, it will be resolved even if component is destroyed
  public timeOutPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
      console.log("promise resolved")
    }, 3500);
  });
}
