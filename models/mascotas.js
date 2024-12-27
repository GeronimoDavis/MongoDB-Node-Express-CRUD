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
        return await Mascota.findOneAndUpdate(id, mascota, {new: true});
    }

    async deleteMascota(id){
        return await Mascota.findOneAndDelete(id);
    }
}

export default new mascotasModel();