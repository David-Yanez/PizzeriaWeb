import { Component, OnInit, forwardRef } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { Producto } from 'src/app/models/producto';
import { NgForm } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [ProductoService],

})
export class PedidosComponent implements OnInit {


  productos: any = [];

 
  total: any = 0;
  pedido = {producto: "", 
  cantidad: 0, 
  precio:0,
  detalle_pedido : []   }

  constructor( public pedidoService: PedidoService, public productoService: ProductoService) {}

  ngOnInit(): void {

    this.productoService.getProductos().subscribe(
      res => {
 this.productos = res;
      },
      err => console.error(err)
  
    );
    
  }


  opcionSeleccionado: string  = 'Mesa';
  verSeleccion: string        = '';

  datos =['Llevar','Mesa 1','Mesa 2','Mesa 3'];

  capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion
      this.verSeleccion = this.opcionSeleccionado;
  }


  precio(){
  // let data = this.productoService.selectedProducto.split("-")
   // console.log(this.productoService.selectedProducto);
   let data = this.pedido.producto.split("-");
   this.pedido.precio = Number(data[1]);

   console.log(this.pedido.producto);
  }

  agregar(){

    let data = this.pedido.producto.split("-");

    this.pedido.detalle_pedido.push({
      producto_id: data[0],
      producto_nombre: data[2],
      cantidad: this.pedido.cantidad,
      precio: this.pedido.precio,
      subtotal: this.pedido.cantidad * this.pedido.precio
    });
    this.total += Number(this.pedido.cantidad) * Number(this.pedido.precio);
  }


 /* addPedido(form: NgForm){

  /*var  valor_total = this.total
 var venta = [form.value, this.pedido, valor_total];*/
 

  /*  this.pedidoService.postPedido(form.value)
    .subscribe(res =>{
      console.log(res);
    });
  }*/

}
