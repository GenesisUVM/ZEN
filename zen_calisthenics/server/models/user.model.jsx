import mongoose from "mongoose";


const UsuarioSchema = new mongoose.Schema({
    nombre_usuario: {
        type: mongoose.Schema.Types.String, required: true, trim: true,  unique: true
    },nombre: {
        type: mongoose.Schema.Types.String, required: true,
    },correo: {
        type: mongoose.Schema.Types.String, required: true, unique: true
    },numero: {
        type: mongoose.Schema.Types.Number, required: true, 
    },contrasena: {
        type: mongoose.Schema.Types.String, required: true, unique: true
    },rol: {
        type: mongoose.Schema.Types.String, required: true,
    }
});

export  const User = mongoose.model("Usuario", UsuarioSchema);