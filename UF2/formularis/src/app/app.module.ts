import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidenciaComponent as incidenciaTD } from './Projecte/Components/incidencia/TemplateDriven/incidencia.component';
import { IncidenciaComponent as incidenciaRF } from './Projecte/Components/incidencia/ReactiveForms/incidencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    incidenciaTD,
    incidenciaRF
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
