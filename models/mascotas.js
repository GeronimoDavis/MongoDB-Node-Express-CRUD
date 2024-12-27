import mongoose from "mongoose";
import Mascota from "../schemas/mascotas.js";

class mascotasModel{

    async create(mascota){
        return await Mascota.create(mascota);
    }

    async getAllMascotas(){
        return await Mascota.find();
    }
    
    async getOneMascotas(id){
        return await Mascota.findById(id);
    }

    async updateMascota(id, mascota){
        return await Mascota.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, mascota, {new: true});
    }

    async deleteMascota(id){
        return await Mascota.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }
}

export default new mascotasModel();