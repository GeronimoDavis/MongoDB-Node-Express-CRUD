import mongoose from "mongoose";

const mascotasSchema = new mongoose.Schema({

    nombre: {type: String, required: true},
    tipo: {type: String, required: true},
    raza: {type: string},
    edad: {type: Number, required: true},
    descrpcion: {type: String},
    adoptado: {type: bool}

    }, {timeseries: true}
);

export default mongoose.model("mascotas", mascotasSchema);