const Sequilize = require('sequelize');
const sequilize = new Sequilize("database", "user", "passwrd", {host: 'localhost', dialect: 'mysql'});
module.exports = sequelize;

try{
    sequelize.authenticate();
    console.log("Conexão com o banco estabelecida com sucesso!");
}
catch(error){
    console.error("Ocorreu um erro durante a conexão com o banco ", error);
}