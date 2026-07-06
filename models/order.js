import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    registered_by: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    recieved_by: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    people_helped: {
        type: Number,
        required: true,
    },
})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;