const Psicologos = require("../models/Psicologos");

const bcrypt = require("bcryptjs");

const psicologosControler = {
  async cadastrarPsicologo(req, res) {
    try {
      const { nome, email, senha, apresentacao } = req.body;

      const checkEmail = await Psicologos.count({ where: { email } });
      if (checkEmail) {
        return res.status(400).json("Email ja cadastrado!");
      }

      const newSenha = bcrypt.hashSync(senha, 10);

      const novoPsicologo = await Psicologos.create({
        nome,
        email,
        senha: newSenha,
        apresentacao,
      });
      res.status(201).json(novoPsicologo);
    } catch (error) {
      res.status(400).json("Erro, Psicologo não cadastrado");
    }
  },

  async listarPsicologo(req, res) {
    try {
      const listaDePsicologo = await Psicologos.findAll();

      res.status(200).json(listaDePsicologo);
    } catch (error) {
      console.error(error);
      res.status(500).json("Erro na lista");
    }
  },

  async showPsicologo(req, res) {
    try {
      const findPsicologo = await Psicologos.findByPk(req.params.id, {
        attributes: ["nome", "email", "apresentacao"],
      });

      res.status(200).json(findPsicologo);
    } catch (error) {
      return res.error(404).json("Id não encontrado");
    }
  },

  async atualizarPsicologo(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, apresentacao } = req.body;

      const psicologoAtualizado = await Psicologos.update(
        {
          nome,
          email,
          senha,
          apresentacao,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json("Psicologo Atualizado");
    } catch (error) {
      return res.status(400).json("Erro ao Atualizado");
    }
  },

  async deletarPsicologo(req, res) {
    try {
      const { id } = req.params;

      await Psicologos.destroy({
        where: {
          id,
        },
      });

      res.json("Psicologo deletado");
    } catch (error) {
      res.status(404).json("Id não encontrado");
    }
  },
};

module.exports = psicologosControler;
