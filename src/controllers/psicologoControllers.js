// Vamos criar um crude em cima da tabela chamada psicologos do banco de dados

// importar Psicologos.js que esta na pasta models
const Psicologos = require("../models/Psicologos")

const psicologosControler = {
    // cadastrar Psicologo
    async cadastrarPsicologo(req, res) {
        try {
            const { nome, email, senha, apresentacao }  = req.body

            const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha, 
            apresentacao
            })
            res.status(201).json(novoPsicologo)
            
        } catch (error) {
            res.status(400).json("Erro, Produto não cadastrado")
            
        }
    },

    // listar todos os psicologo que ja foram cadastrados
    async listarPsicologo (req, res) {
        try {
            const listaDePsicologo = await Psicologos.findAll()

            res.status(200).json(listaDePsicologo)            

        } catch (error) {
            console.error(error)
            res.status(500).json("Erro na lista")   
        }
    },

    /* listar psicologo pelo id e devolver um objeto com todas as informações
    async showPsicologo (req, res){
        try {
            const findPsicologo = await Psicologos.findAll({
            where: {
                id: req.params.id
            }})

            res.status(200).json(findPsicologo);
        } catch (err) {
            res.status(404).json("Id não encontrado")
        }
    },
    */

    // listar psicologo pelo id e devolver um objeto com todas as informações, com exceção da senha  
    async showPsicologo (req, res) {

        try {
            const findPsicologo  = await Psicologos.findByPk(req.params.id, {
                attributes: [
                    'nome', 'email', 'apresentacao'
                ]
            })
         
            res.status(200).json(findPsicologo)
            
        } catch (error) {
            res.error(404).json("Id não encontrado")
            
        } 
    },

    // atualizar o psicologo que ja foram cadastrados
    async atualizarPsicologo (req, res) {

        try {
            const { id } = req.params
            const {nome, email, senha, apresentacao}  = req.body

            const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha,
            apresentacao         
        }, {
            where: {
                id,
            }
            })

            res.status(200).json("Psicologo Atualizado")            
        } catch (error) {
            return res.status(400).json("Erro ao Atualizado")              
        }
    },

    // deletar psicologo que ja foram cadastrados
    async deletarPsicologo (req, res) {

        try {
            const { id } = req.params

            await Psicologos.destroy({
            where: {
                id,
            }
            })

            res.json("Psicologo deletado")            
        } catch (error) {
            res.status(404).json("Id não encontrado")            
        }
    }

}

// o objeto psicologosControler precisa ser exportado
module.exports = psicologosControler