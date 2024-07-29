import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExamplesRoutingModule } from './examples-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

@NgModule({
  declarations: [
    BasicsPageComponent,
    CustomPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
  ],
  imports: [CommonModule, ExamplesRoutingModule, PrimeNgModule],
})
export class ExamplesModule {}
