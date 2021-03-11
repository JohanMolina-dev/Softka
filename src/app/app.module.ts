import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaConsultaComponent } from './components/lista-consulta/lista-consulta.component';
import { CalculoFormsComponent } from './components/calculo-forms/calculo-forms.component';
import { FormsModule } from '@angular/forms';
import { EquipajeComponent } from './components/equipaje/equipaje.component';
import { ListaEquipajeComponent } from './components/lista-equipaje/lista-equipaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaConsultaComponent,
    CalculoFormsComponent,
    EquipajeComponent,
    ListaEquipajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
