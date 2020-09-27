import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  //productos : [];

  constructor() { }

  ngOnInit(): void {
   /* this.sp.listar().subscribe (data =>{
      this.productos = data;
    }, err => {

    });*/
  }

}
