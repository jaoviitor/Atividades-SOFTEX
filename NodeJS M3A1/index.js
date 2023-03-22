const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Resposta da requisição GET');
});

app.post('/', (req, res) => {
    res.send('Resposta da requisição POST');
});

app.put('/', (req, res) => {
    res.send('Resposta da requisição PUT');
});

app.delete('/', (req, res) => {
    res.send('Resposta da requisição DELETE');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})

//Para rodar o código é só digitar "node index.js" no terminal e conferir as rotas em um programa de requisições HTTP como Insomnia