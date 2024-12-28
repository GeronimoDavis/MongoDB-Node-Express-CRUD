import mongoose from "mongoose";
import Usuario from "../schemas/usuarios.js";

class usuariosModel{

    async create(usuarios){
        return await Usuario.create(usuarios);
    }

    async getAllUsuarios(){
        return await Usuario.find();
    }

    async getOneUsuariosById(id){
        return await Usuario.findById(id);
    }

    async getOne(filtro){
        return await Usuario.findOne(filtro);
    }
    async updateUsuario(id, usuarios){
        return await Usuario.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, usuarios, {new: true});
    }

    async deleteUsuario(id){
        return await Usuario.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }

}

export default new usuariosModel();