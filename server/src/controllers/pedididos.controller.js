

const pedidoCtrl = {}
const Pedido = require('../models/Pedido')


pedidoCtrl.getPedidos = async (req, res) => {
    const pedidos = await Pedido.find()
    res.json(pedidos)
    res.send('Obtener Pedidos')
};

pedidoCtrl.createPedido = async(req, res) => {
   console.log(req.body)
  /*  const newPedido = new Pedido(req.body)
    await newPedido.save()
    res.send({message: 'Pedido Creado'})*/
    res.send('Pedido Creado');
};

pedidoCtrl.getPedido = async (req, res) => {
const pedido = await Pedido.findById(req.params.id)
res.send(pedido);
};

pedidoCtrl.editPedido = async (req, res) => {
    await Pedido.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Pedido Actualizado'})
};

pedidoCtrl.deletePedido = async (req, res) => {
    await Pedido.findByIdAndDelete(req.params.id)
    res.json({status: 'Pedido Eliminados'})
};



module.exports = pedidoCtrl;