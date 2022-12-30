const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbProduto', 'root', 'jv5712',
{
    dialect: 'mysql', host: 'localhost'
});

module.exports = componenteSequelize;