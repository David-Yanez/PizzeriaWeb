import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {


selectedPedido: Pedido;
pedidos: Pedido[];
readonly URL_API = 'http://localhost:3000/api/pedidos';

  constructor(private http: HttpClient) { }

  getPedidos(){
    return this.http.get(this.URL_API);
   
  }
  postPedido(pedido: Pedido){
    return this.http.post(this.URL_API, pedido)

  }

  putPedido(pedido: Pedido){
    return this.http.put(this.URL_API + `/${pedido._id}`, pedido)
  }

  deletePedido(_id: Pedido){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
