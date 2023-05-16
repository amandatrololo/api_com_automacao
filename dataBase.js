const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

async function conectaBancoDeDados(){
try{
    console.log('Conexão do dataBase iniciada')

    await mongoose.connect(process.env.MONGO_URL)

    console.log('Conexão com o dataBase feita com sucesso!')
}catch(error){
    console.log(error)
}
}

module.exports = conectaBancoDeDados