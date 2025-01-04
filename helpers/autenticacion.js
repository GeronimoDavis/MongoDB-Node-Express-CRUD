import "dotenv/config";
import jwt from "jsonwebtoken";

function generarToken(email) {

    return jwt.sign({email}, process.env.JWT_TOKEN_SECRET, {expiresIn: "1h"});
}

export default generarToken;