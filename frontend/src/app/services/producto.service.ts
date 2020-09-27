import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Producto} from '../models/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  selectedProducto: Producto;
  productos: Producto[];
  readonly URL_API = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { 
    this.selectedProducto = new Producto();
  }
 
  getProductos(){
    return this.http.get(this.URL_API);
  }
  postProducto(producto: Producto){
    return this.http.post(this.URL_API, producto);
  }
  putProducto(producto: Producto){
    return this.http.put(this.URL_API + `/${producto._id}`, producto);
  }
  deleteProducto(_id: string){
return this.http.delete(this.URL_API + `/${_id}`);
  }
}
