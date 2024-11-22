import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
}, { versionKey: false }); 

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;

