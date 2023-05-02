const express = require("express")
const router = express.Router()


const app = express()
const $porta = 3333

const mulheres = [
    {
        nome : 'Gabriela Chatona',
        imagem: 'https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s900-c85.webp',
        biografia: 'Ela é chata'
    },
    {
        nome : 'Amanda Bittencourt Lopes',
        imagem: 'https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s900-c85.webp',
        biografia: 'Ela é incrível'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log('Servidor criado e rodando na porta',$porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen($porta, mostraPorta)