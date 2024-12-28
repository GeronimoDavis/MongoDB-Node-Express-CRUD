import usuariosModel from "../models/usuarios.js";
import bcrypt from "bcryptjs";

class usuariosController{

    constructor(){

    }

    async register(req, res){
        const {email, nombre, telefono, clave} = req.body;

        const usuarioExiste = await usuariosModel.getOne({email});
        if(usuarioExiste){
            return res.status(400).json({message: "El usuario ya existe"});
        }

        const claveEncriptada = await bcrypt.hash(clave, 10);

        const data = await usuariosModel.create({email, nombre, telefono, clave: claveEncriptada});
        try{
            res.status(201).json(data);
        }catch(e){
           console.log(e);
           res.status(500).send(e);
        }
    }

}

export default new usuariosController();