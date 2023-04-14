const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderRowSchema = new Schema ({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', require: true },
    quantity: { type: Number, required: true }
})


const orderSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    orderRows:  [orderRowSchema] ,
    totalPrice: { type: Number, default: 0 }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order;

