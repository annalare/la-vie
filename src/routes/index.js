const express = require("express");

// importando o psicologosControler que esta no arquivo psicologosControler.js
const psicologosControler = require("../controllers/psicologoControllers")
const pacientesController = require('../controllers/pacientesController');
const atendimentosController = require('../controllers/atendimentosController');
const authController = require("../controllers/authController");
const validadorDeLogin = require("../validators/login/validatorDeLogin");
const validadorDeId = require("../validators/id/validadorDeId")
const auth = require("../middlewares/auth");

// importando a validação de psicologos para colocar ele de forma local, insira o validationPsicologo dentro da rota desejada antes do controller para poder validar as informações
const validationPsicologo = require("../validators/psicologos/validationPsicologo")

// importando a validação de pacientes para colocar ele de forma local, insira o validationPsicologo dentro da rota desejada antes do controller para poder validar as informações
const validationPaciente = require("../validators/pacientes/validationPacientes")

const routes = express.Router();

routes.post("/login", validadorDeLogin, authController.login);

// criar uma rota para cadastrar psicologos usaremos o metodo post: chamando o nosso psicologosControler e acessando o metodo cadastrarPsicologo
routes.post("/psicologos", auth, validationPsicologo, psicologosControler.cadastrarPsicologo)

// criar uma rota para listar todos os psicologos usaremos o metodo get: chamando o nosso psicologosControler e acessando o metodo listarPsicologo   
routes.get("/psicologos", psicologosControler.listarPsicologo)
 
// criar uma rota para devolver um objeto com todas as informações do psicólogo do id informado na url, usaremos o metodo get: chamando o nosso psicologosControler e acessando o metodo showPsicologo
routes.get("/psicologo/:id", validadorDeId, psicologosControler.showPsicologo)

// criar uma rota para atualizar psicologos usaremos o metodo put: chamando o nosso psicologosControler e acessando o metodo atualizarPsicologo
routes.put("/psicologo/:id", validationPsicologo, validadorDeId, psicologosControler.atualizarPsicologo)

// criar uma rota para deletar psicologo usaremos o metodo delete: chamando o nosso psicologosControler e acessando o metodo deletarPsicologo
routes.delete("/psicologo/:id", validadorDeId, psicologosControler.deletarPsicologo)

//crud pacientes

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", validadorDeId, pacientesController.listarPacientes);
routes.post("/pacientes/criar", auth, validationPaciente, pacientesController.cadastrarPacientes);
routes.delete("/pacientes/:id", validadorDeId,  pacientesController.deletarPacientes);
routes.put("/pacientes/:id", validadorDeId, pacientesController.atualizarPacientes);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", validadorDeId, atendimentosController.listarAtendimentos);
routes.post("/atendimentos", auth, atendimentosController.cadastraratendimentos);

module.exports = routes;