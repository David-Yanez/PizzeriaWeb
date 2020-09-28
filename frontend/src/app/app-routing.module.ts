import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductosComponent} from './components/productos/productos.component';
import {PedidosComponent} from './components/pedidos/pedidos.component';
import {InicioComponent} from './components/inicio/inicio.component';
import  { ProduListComponent } from './components/produ-list/produ-list.component';
import {ContactosComponent} from './components/contactos/contactos.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'listarproductos', component: ProduListComponent},
  {path: 'registropro', component: ProductosComponent},
  {path: 'registroped', component: PedidosComponent},
  {path: 'contacto', component: ContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
