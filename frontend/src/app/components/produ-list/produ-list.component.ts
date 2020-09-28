import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';
import { from } from 'rxjs';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-produ-list',
  templateUrl: './produ-list.component.html',
  styleUrls: ['./produ-list.component.css']
})
export class ProduListComponent implements OnInit {

  productos: any = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
   this.productoService.getProductos().subscribe(
     res => {
this.productos = res;
     },
     err => console.error(err)
   ) ;
  }

}
