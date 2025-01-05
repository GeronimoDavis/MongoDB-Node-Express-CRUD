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

}

export default new usuariosController();