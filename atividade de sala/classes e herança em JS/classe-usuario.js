//atividade de criar uma classe usuario, uma classe admin que herda usuario e criar uma função que diz se o usuario é admin ou não

class User{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin = () => {
        if(this.admin){
            console.log("Este usuário é admin")
        } else{
            console.log("Este usuário não é admin")
        }
    }
}

class Admin extends User{
    constructor(email, senha){
        super(email, senha)
        this.admin = true;
    }
}

const User1 = new User('fuladodetal@gmail.com', 'fulainho123');
const Admin1 = new Admin('ciclanodetal@gmail.com', 'ciclano123');

User1.isAdmin()
Admin1.isAdmin()
