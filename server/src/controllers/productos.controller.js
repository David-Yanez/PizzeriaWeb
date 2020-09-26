

const productoCtrl = {}
const Producto = require('../models/Producto')

productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find() 
    res.json(productos)
    res.send('Obtener Productos')
}
productoCtrl.createProductos = (req, res) => {}
productoCtrl.getProducto = (req, res) => {}
productoCtrl.editProducto = (req, res) => {}
productoCtrl.deleteProducto = (req, res) => {}



module.exports = productoCtrl;