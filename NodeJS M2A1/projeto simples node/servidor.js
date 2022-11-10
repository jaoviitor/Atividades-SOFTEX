const {criarServer} = require("http");
const porta = process.env.port || 8080;
const servidor = criarServer();

servidor.on("request", (request, response) => {
    response.end("Olá mundo!");
});
servidor.listen(port, () => {
    console.log(`servidor iniciado na porta ${porta}`);
});