import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';
import { NgForm } from '@angular/forms';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {

    
  }

addProducto(form: NgForm){
  this.productoService.postProducto(form.value)
  .subscribe(res =>{
    console.log(res);
  })
  console.log(form.value);

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
