const express = require("express");
const empleadoRouter = express.Router();
const empleadoController = require('../controllers/empleadoController') 
const bodyParser = require('body-parser');

empleadoRouter.use(bodyParser.json());
empleadoRouter.route("/:codigo?").get(empleadoController.findAllEmpleados);
empleadoRouter.route("/").post(empleadoController.createEmpleado);
empleadoRouter.route("/:codigo").put(empleadoController.updateEmpleado);
empleadoRouter.route("/:codigo").delete(empleadoController.deleteEmpleado);

module.exports = empleadoRouter