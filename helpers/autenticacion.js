import "dotenv/config";
import jwt from "jsonwebtoken";


function generarToken(email) {

    return jwt.sign({email}, process.env.JWT_TOKEN_SECRET, {expiresIn: "1h"});
}

function validarToken(req, res, next) {

    const token = req.header("Authorization")?.replace("Bearer ","");//Elimina el bearer del token, dejamos un espacio en blanco despues del bearer para que no quede pegado el bearer al token y poder eliminarlo de forma correcta

    if(!token){
        return res.status(401).json({error: "token requerido"});
    }

    try{
        const dataToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        console.log(dataToken.email);
        next();

    }catch(e){
        res.status(401).json({error: "token invalido"});
    }
    
}

export {generarToken, validarToken};

