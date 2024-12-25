import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class mascotasModel{

    async create(mascota){
        const colectionMascotas = dbClient.db.collection("mascotas");
        return await colectionMascotas.insertOne(mascota);

    }

    async getAllMascotas(){
        const colectionMascotas = dbClient.db.collection("mascotas");
        return await colectionMascotas.find({}).toArray();
    }
    
    async getOneMascotas(id){
        const colectionMascotas = dbClient.db.collection("mascotas");
        return await colectionMascotas.findOne({_id: new ObjectId(id)});
    }

    async updateMascota(id, mascota){
        const colectionMascota = dbClient.db.collection("mascotas");
        return await colectionMascota.updateOne({_id: new ObjectId(id)}, {$set: mascota});
    }

    async deleteMascota(id){
        const colectionMascota = dbClient.db.collection("mascotas");
        return await colectionMascota.deleteOne({_id: new ObjectId(id)});
    }
}

export default new mascotasModel();