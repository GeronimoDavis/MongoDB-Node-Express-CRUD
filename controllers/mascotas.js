import mascotasModel from "../models/mascotas.js";
class mascotasController{

    constructor(){

    }

    async createMascota(req, res){
        const data = await mascotasModel.create(req.body);
        try{
            res.status(201).json(data);
        }catch(e){
           res.status(500).send(e);
        }
    }

    async getAllMascotas(req, res){
        try{
            const data = await mascotasModel.getAllMascotas();
            res.status(201).json(data);
        }catch(e){
           res.status(500).send(e);
        }
    }

    async getOneMascota(req, res){
        try{
            res.status(201).json({status: "getOne-ok"});
        }catch(e){
           res.status(500).send(e);
        }
    }
    
    async updateMascota(req, res){
        try{
            res.status(201).json({status: "update-ok"});
        }catch(e){
           res.status(500).send(e);
        }
    }

    async deleteMascota(req, res){
        try{
            res.status(201).json({status: "delete-ok"});
        }catch(e){
           res.status(500).send(e);
        }
    }

    
}

export default new mascotasController();