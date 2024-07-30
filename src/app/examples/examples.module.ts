import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExamplesRoutingModule } from './examples-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { AvailabilityPipe } from './pipes/availability.pipe';
import { ColorNamePipe } from './pipes/color-name.pipe';
import { LowerUpperCasePipe } from './pipes/lower-upper-case.pipe';
import { SizeNamePipe } from './pipes/size-name.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';

@NgModule({
  declarations: [
    // components
    BasicsPageComponent,
    CustomPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    // pipes
    AvailabilityPipe,
    ColorNamePipe,
    LowerUpperCasePipe,
    SizeNamePipe,
    SortByPipe,
    ToggleCasePipe,
  ],
  imports: [CommonModule, ExamplesRoutingModule, PrimeNgModule],
})
export class ExamplesModule {}
