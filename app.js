import "dotenv/config";
import express from "express";
import routesMacotas from "./routes/mascotas.js";
import bodyParser from "body-parser";
import dbClient from "./config/dbClient.js";
import usuariosRouter from "./routes/usuarios.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/mascotas", routesMacotas);
app.use("/usuarios", usuariosRouter);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    })
}catch(e){
    console.log(e);
}

process.on("SIGINT", () => {
    dbClient.cerrarBD();
    process.exit();
});