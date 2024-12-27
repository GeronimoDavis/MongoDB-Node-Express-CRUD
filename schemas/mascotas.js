import mongoose from "mongoose";

const mascotasSchema = new mongoose.Schema({

    nombre: {type: String, required: true},
    tipo: {type: String, required: true},
    raza: {type: String},
    edad: {type: Number, required: true, min:[0, "La edad no puede ser menor a 0"], max:[25, "La edad no puede ser mayor a 25"]},
    descrpcion: {type: String},
    adoptado: {type: Boolean, default: false},

    }, {timeseries: true}
);

export default mongoose.model("mascotas", mascotasSchema);