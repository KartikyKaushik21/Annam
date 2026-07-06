import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
    },
    ngoName: {
        type: String,
    },
    location: {
        type: String,
    },
})

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;