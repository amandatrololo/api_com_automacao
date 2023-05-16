const express = require("express")
const router = express.Router()


const app = express()
const $porta = 3333

function mostraMulher(request, response){
    response.json({
        nome : 'Gabriela Chatona',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQHqlg5nqJmLMg/profile-displayphoto-shrink_400_400/0/1550509050079?e=1689811200&v=beta&t=NoFMjkeJSlj03NwbiVqHJ8f017JWvaZi9lAA6mJvZ2k',
        biografia: 'Ela é chata'
    })
}

function mostraPorta(){
    console.log('Servidor criado e rodando na porta',$porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen($porta, mostraPorta)