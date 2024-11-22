import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({
    correo: {
        type: String,
        require: true
    },
    contra:{
        type: Number,
        require: true
    },
    registro: {
        type : Date,
        default: Date.now,
        require: true
    }
    
}, { versionKey: false });

const Usuario = mongoose.model("Usuario", usuarioSchema);


export default Usuario;
