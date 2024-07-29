import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';

@NgModule({
  exports: [
    ButtonModule,
    CalendarModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
  ],
})
export class PrimeNgModule {}
