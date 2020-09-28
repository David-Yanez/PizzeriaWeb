import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';
import { NgForm } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { from } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']

})
export class ProductosComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {

    this.getProductos();
  }

addProducto(form: NgForm){

if (form.value._id){
  this.productoService.putProducto(form.value)
  .subscribe(res =>{
    this.resetForm(form);
    this.getProductos();
    console.log(res);
  })
} else {

  this.productoService.postProducto(form.value)
  .subscribe(res =>{
    this.resetForm(form);
    this.getProductos();
    console.log(res);
  });
  //console.log(form.value);
}
}


getProductos(){
  this.productoService.getProductos()
  .subscribe(res => {
    this.productoService.productos = res as Producto[];
    console.log(res);
  })
}

editProducto(producto: Producto){
  this.productoService.selectedProducto = producto;
}

deleteProducto (_id: string){
 this.productoService.deleteProducto(_id)
 .subscribe(res =>{
   this.getProductos();
console.log(res)
 });
}



  resetForm (form?: NgForm){
if (form){
  form.reset();
  this.productoService.selectedProducto = new Producto();
}
  }



   
    // Seleccionamos o iniciamos el valor '0' del <select>
    opcionSeleccionado: string  = 'Categoria';
    verSeleccion: string        = '';

    datos =['Pizzas','Bebidas','Lasañas','Entradas'];
  
    capturar() {
        // Pasamos el valor seleccionado a la variable verSeleccion
        this.verSeleccion = this.opcionSeleccionado;
    }
  

}
