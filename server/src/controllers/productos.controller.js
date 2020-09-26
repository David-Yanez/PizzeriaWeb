

const productoCtrl = {}
const Producto = require('../models/Producto')

productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find() 
    res.json(productos)
    res.send('Obtener Productos')
}
productoCtrl.createProductos = async (req, res) => { 
    const newProducto = new Producto(req.body)
    await newProducto.save()
    res.send({message: 'Producto Creado'})
};
productoCtrl.getProducto = async (req, res) => {
   const producto = await  Producto.findById(req.params.id)
    res.send(producto);
 
};
productoCtrl.editProducto = async (req, res) => {
 await Producto.findByIdAndUpdate(req.params.id, req.body)
res.json({status: 'Producto Actualizado'})
};

productoCtrl.deleteProducto = async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id)
    res.json({status: 'Producto Eliminado'})
};



module.exports = productoCtrl;