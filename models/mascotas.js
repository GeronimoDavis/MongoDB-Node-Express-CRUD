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
}

export default new mascotasModel();