import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeEsCO);
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    PrimeNgModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
