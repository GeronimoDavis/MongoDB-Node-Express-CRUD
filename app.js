import "dotenv/config";
import express from "express";
import routesMacotas from "./routes/mascotas.js";

const app = express();

app.use("/mascotas", routesMacotas);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    })
}catch(e){
    console.log(e);
}