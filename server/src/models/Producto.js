const {Schema, model} = require('mongoose')

const productosSchema = new Schema ({
    nombre: {type: String, required:true},
    categoria: {type: String, required:true},
    descripcion: {type: String, required:true},
    imagen: {type: String, required:true},
    precio: {type: Number, required:true }

});

 module.exports = model ('Producto', productosSchema);