// Vamos montar uma função que vai pegar o erro e quando acontecer esse o erro e vai devolver como resposta

// importando express-validation
const { ValidationError } = require("express-validation")

module.exports = (error, req, res, next) => {

    // vamos fazer uma validação para saber o tipo de erro
    if(error instanceof ValidationError) {
        return res.status(error.statusCode).json(error)

        // caso esse erro não seja do tipo validation error
        return res.status(500).json(error)
    }

    // Agora vamos começar a fazer o processo de validação daquilo que a gente quer, de cada rota. Vamos criar uma nova pasta chamada de validations e dentro dessa pasta iremos criar uma outra pasta com o nome da tabela que queremos para fazer essas validações
}


