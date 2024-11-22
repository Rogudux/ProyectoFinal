import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categoriaSchema = new Schema ({
    nombre: {
        type: String,
        require: true
    }

}, { versionKey: false });

const Categoria = mongoose.model("Categoria", categoriaSchema);

//module.exports = Categoria

export default Categoria;
