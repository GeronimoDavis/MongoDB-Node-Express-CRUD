import express from "express";
const route = express.Router();
import mascotasController from "../controllers/mascotas.js";
import { validarToken } from "../helpers/autenticacion.js";

route.post("/", mascotasController.createMascota);
route.get("/", mascotasController.getAllMascotas);
route.get("/:id", mascotasController.getOneMascota);
route.put("/:id", validarToken, mascotasController.updateMascota);
route.delete("/:id", mascotasController.deleteMascota);

export default route;

