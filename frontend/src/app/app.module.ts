import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProduListComponent } from './components/produ-list/produ-list.component';
import { ContactosComponent } from './components/contactos/contactos.component';


@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    ProductosComponent,
    InicioComponent,
    ProduListComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
