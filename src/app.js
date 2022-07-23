const express = require("express");
const db = require("./database");
const routes = express.Router();

const app = express();

db.hasConnection();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
