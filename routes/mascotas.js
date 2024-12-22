import express from "express";
const route = express.Router();
import mascotasController from "../controllers/mascotas.js";


route.post("/");
route.get("/");
route.get("/:id");
route.put("/:id");
route.delete("/:id");

