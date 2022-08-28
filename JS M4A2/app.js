const express = require('express')
const app = express()

app.get('/', function (req, res){ //criando a função usando function
    res.send('Pagina Home')
})

app.listen(8080)