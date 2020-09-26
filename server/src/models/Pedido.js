const {Schema, model} = require('mongoose')

const pedidosSchema = new Schema ({
    cliente: {type: String, required:true},
    mesa: {type: String, required:true},
    estado: {type: String, required:true},
    fecha: {type: String, required:true},
    productos: [{
        producto:{
            type: Schema.Types.ObjectId,
            ref : 'Producto',
            required: true
        },
        cantidad: {type: Number, required: true}
    }],
    valor_total: {type: Number, required:true}

});

 module.exports = model ('Pedido', pedidosSchema);