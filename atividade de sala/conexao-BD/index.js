(async () => {
    const database = require('./bd');
    const produto = require('./produto');

    //chamando o banco de dados
    await database.sync(); //espere o database ficar pronto
    //adicionando coisas na tabela criada
    await produto.create(
        {
            Nome: "Produto 1",
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: "Produto 2",
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: "Produto 3",
            DataCriacao: Date()
        }
    )
    //alterando coisas na tabela criada
    const alterProd = await produto.findByPk(2);
    alterProd.Nome = "Arquivo 2 alterado";
    await alterProd.save();

    //deletando coisas na tabela criada
    produto.destroy({where: {id: 1}});
    
    //para achar um
    const FindProd = await produto.findByPk(3);
    console.log(FindProd);
    //para achar todos
    const findAllProd = await produto.findAll();
    console.log(findAllProd);

})();



