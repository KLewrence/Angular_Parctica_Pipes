import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//cambiar data a español para fecha
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PipePersonalizado } from './pipes/pipePersonalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    PipePersonalizado,
    DomSeguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  //cambiar data a español para fecha
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
