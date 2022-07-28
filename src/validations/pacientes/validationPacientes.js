// Aqui vamos fazer a validação dos dados do pacientes

// precisamos importar express-validation e uma função chamada validate, e a blibioteca Joi para poder validar
const { validate, Joi } = require("express-validation")

module.exports = validate({
    // vamos montar um objeto de validação para o body receber
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        data_nascimento: Joi.date().required()
    })
})

