import dbClient from "../config/dbClient.js";

class mascotasModel{

    async create(mascota){
        const colectionMascotas = dbClient.db.collection("mascotas");
        await colectionMascotas.insertOne(mascota);

    }
}

export default new mascotasModel();