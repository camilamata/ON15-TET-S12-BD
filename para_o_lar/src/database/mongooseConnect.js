const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI
//Criando a função para conectar ao DB 
const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true, //permite a conexão com o URI
            useUnifiedTopology: true //permite que o nosso banco aceite campo único
        })
        console.log('banco conectado!')
    } catch (error) {
        console.error(error)
    }
}

module.exports = { connect }