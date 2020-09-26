const {Router} = require('express')
const router = Router()

const productosCtrl = require('../controllers/productos.controller.js')
const pedidosCtrl = require('../controllers/pedididos.controller.js')


// Rutas para los productos 
router.get('/productos', productosCtrl.getProductos );
router.post('/productos', productosCtrl.createProductos );
router.get('/productos/:id', productosCtrl.getProducto );
router.put('/productos/:id', productosCtrl.editProducto );
router.delete('/productos/:id', productosCtrl.deleteProducto );


//Rutas para los pedidos 
router.get('/pedidos', pedidosCtrl.getPedidos );
router.post('/pedidos', pedidosCtrl.createPedido );
router.get('/pedidos/:id', pedidosCtrl.getPedido);
router.put('/pedidos/:id', pedidosCtrl.editPedido );
router.delete('/pedidos/:id', pedidosCtrl.deletePedido );



module.exports = router