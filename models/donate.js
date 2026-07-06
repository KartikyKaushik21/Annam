import mongoose from "mongoose";
const Schema = mongoose.Schema;

const donateSchema = new Schema({
    quantity: {
        type: String,
    },
    pickupTime: {
        type: String,
    },
    foodType: {
        type: String,
    },
    location: {
        type: String,
    }
})

const Donate = mongoose.model("Donate", donateSchema);
export default Donate;