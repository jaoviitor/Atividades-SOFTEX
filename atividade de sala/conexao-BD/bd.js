const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbProduto', 'root', 'JOgos@100z',
{
    dialect: 'mysql', host: 'localhost'
});

module.exports = componenteSequelize;