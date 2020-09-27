export class Producto {

constructor(_id='', nombre='', categoria='', descripcion='', imagen='', precio= 0){

    this._id = _id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.precio = precio;
}

_id:string;
    nombre: string;
    categoria: string;
    descripcion: string;
    imagen: string;
    precio: number;
}
