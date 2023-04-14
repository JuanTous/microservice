const express = require("express");
const departamentoRouter = express.Router();
const departamentoController = require('../controllers/departamentoController') 
const bodyParser = require('body-parser');

departamentoRouter.use(bodyParser.json());
departamentoRouter.route("/:codigo?").get(departamentoController.findAllDepartamentos);
departamentoRouter.route("/").post(departamentoController.createDepartamento);
departamentoRouter.route("/:codigo").put(departamentoController.updateDepartamento);
departamentoRouter.route("/:codigo").delete(departamentoController.deleteDepartamento);

module.exports = departamentoRouter