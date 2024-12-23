import mascotasModel from "../models/mascotas.js";
class mascotasController{

    constructor(){

    }

    async createMascota(req, res){
        const data = mascotasModel.create(req.body);
        try{
            res.status(200).json(data);
        }catch(e){
           res.status(500).send(e);
        }
    }

    async getAllMascotas(req, res){
        try{
            res.status(200).json({status: "ok"});
        }catch(e){
           res.status(500).send(e);
        }
    }

    async getOneMascota(req, res){
        try{
            res.status(200).json({status: "getOne-ok"});
        }catch(e){
           res.status(500).send(e);
        }
    }
    
    async updateMascota(req, res){
        try{
            res.status(200).json({status: "update-ok"});
        }catch(e){
           res.status(500).send(e);
        }
    }

    async deleteMascota(req, res){
        try{
            res.status(200).json({status: "delete-ok"});
        }catch(e){
           res.status(500).send(e);
        }
    }

    
}

export default new mascotasController();