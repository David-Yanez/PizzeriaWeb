import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductosComponent} from './components/productos/productos.component';
import {PedidosComponent} from './components/pedidos/pedidos.component';
import {InicioComponent} from './components/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'registropro', component: ProductosComponent},
  {path: 'registroped', component: PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
