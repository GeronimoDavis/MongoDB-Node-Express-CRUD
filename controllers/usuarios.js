import {generarToken} from "../helpers/autenticacion.js";
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

    async login(req, res){
        const {email, clave} = req.body;

        const usuarioExiste = await usuariosModel.getOne({email});
        if(!usuarioExiste){
            return res.status(400).json({message: "El usuario no existe"});
        }

        const claveValida = await bcrypt.compare(clave, usuarioExiste.clave);
        if(!claveValida){
            return res.status(400).json({message: "Clave incorrecta"});
        }

        const token = generarToken(email);

        return res.status(200).json({message: "Usuario logueado", token});
    }

    async getAllUsuarios(req, res){
        try{
            const data = await usuariosModel.getAllUsuarios();
            res.status(200).json(data);
        }catch(e){
           res.status(500).send(e);
        }
    }

    async getOneUsuarios(req, res){
        try{
            const { email } = req.params;
            const data = await usuariosModel.getOne({email});
            res.status(200).json(data);
        }catch(e){
           res.status(500).send(e);
        }
    }

    async updateUsuario(req, res){
        try{
            const {id} = req.params;
            const data = await usuariosModel.updateUsuario(id, req.body);
            res.status(200).json(data);
        }catch(e){
           res.status(500).send(e);
        }
    }

    async deleteUsuario(req, res){
        try{
            const {id} = req.params;
            const data = await usuariosModel.deleteUsuario(id);
            res.status(200).json(data);
        }catch(e){
           res.status(500).send(e);
        }
    }

}

export default new usuariosController();