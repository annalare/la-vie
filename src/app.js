const express = require("express");
const erroValidacao = require("./middlewares/erroValidacao");
const db = require("./database");

const routes = require("./routes");
const requestLog = require("./middlewares/requestLog")

// importando resquestLog para colocar ele de forma global para que ele possa ser acessado por todas as rotas, agora vou colocar ele antes do app.use(routes)
const requestLog = require("./middlewares/requestLog")

// importando a validção de erro aonde vai capturar qualque tipo de erro, agora vamos colocar ele depois da app.use(routes)
const handleErro = require("./middlewares/handleErro")


const app = express();

db.hasConnection();

app.use(express.json());
app.use(requestLog);
app.use(routes);
app.use(erroValidacao);

// validação de erro
app.use(handleErro)

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
