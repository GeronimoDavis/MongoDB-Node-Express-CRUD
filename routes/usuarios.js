import express from 'express';
const route = express.Router();
import usuarioController from '../controllers/usuarios.js';

route.post('/register', usuarioController.register);
route.post('/login', usuarioController.login);
route.get('/', usuarioController.getAllUsuarios);
route.get('/:email', usuarioController.getOneUsuarios);

export default route;