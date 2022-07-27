const express = require("express");

// importando o psicologosControler que esta no arquivo psicologosControler.js
const psicologosControler = require("../controllers/psicologoControllers")
const pacientesController = require('../controllers/pacientesController');
const atendimentosController = require('../controllers/atendimentosController');

const routes = express.Router();

// criar uma rota para cadastrar psicologos usaremos o metodo post: chamando o nosso psicologosControler e acessando o metodo cadastrarPsicologo
routes.post("/psicologos", psicologosControler.cadastrarPsicologo)

// criar uma rota para listar todos os psicologos usaremos o metodo get: chamando o nosso psicologosControler e acessando o metodo listarPsicologo   
routes.get("/psicologos", psicologosControler.listarPsicologo)
 
// criar uma rota para devolver um objeto com todas as informações do psicólogo do id informado na url, usaremos o metodo get: chamando o nosso psicologosControler e acessando o metodo showPsicologo
routes.get("/psicologo/:id", psicologosControler.showPsicologo)

// criar uma rota para atualizar psicologos usaremos o metodo put: chamando o nosso psicologosControler e acessando o metodo atualizarPsicologo
routes.put("/psicologo/:id", psicologosControler.atualizarPsicologo)

// criar uma rota para deletar psicologo usaremos o metodo delete: chamando o nosso psicologosControler e acessando o metodo deletarPsicologo
routes.delete("/psicologo/:id", psicologosControler.deletarPsicologo)

//crud pacientes

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPacientes);
routes.post("/pacientes/criar", pacientesController.cadastrarPacientes);
routes.delete("/pacientes/:id", pacientesController.deletarPacientes);
routes.put("/pacientes/:id", pacientesController.atualizarPacientes);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentos);
routes.post("/atendimentos", atendimentosController.cadastraratendimentos);



module.exports = routes;
