const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    timeStamp: Date,
    status: String,
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        }],

    orderValue: Number
});

const Order = mongoose.model('Order', orderSchema);


module.exports = Order;