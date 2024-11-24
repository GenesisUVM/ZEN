import mongoose from "mongoose";


const EjercicioSchema = new mongoose.Schema({
    nombre_ejercicio: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },repeticiones: {
        type: mongoose.Schema.Types.Number, required: true,
    },tiempo_descanso: {
        type: mongoose.Schema.Types.Number, required: true,
    },banda_o_peso: {
        type: mongoose.Schema.Types.String, required: true, 
    },comentario: {
        type: mongoose.Schema.Types.String, required: true, 
    }
});

export  const Ejercicio = mongoose.model("Ejercicios", EjercicioSchema);