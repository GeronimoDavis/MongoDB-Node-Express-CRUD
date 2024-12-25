import "dotenv/config";
import { MongoClient } from "mongodb";
import mongoose, { mongo } from "mongoose";

class dbClient {

    constructor(){    
        this.conectarBD();
    }
    async conectarBD(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adopcion`;
        await mongoose.connect(queryString);
    }

    async cerrarBD(){
        try{
            await mongoose.disconnect();
            console.log("Conexion cerrada");
        }
        catch(e){
            console.error("Error al cerrar la conexion",e);
        }
            
    }

}

export default new dbClient();