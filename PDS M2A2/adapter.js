class Pato {

    constructor(name){
        this.name = name;
    }

    quack(){
        console.log("quack quack quack");
    }

    run(){
        console.log("running");
    }

}

class Galinha {

    constructor(name){
        this.name = name;
    }

    cocorico(){
        console.log("cococococo");
    }

    run(){
        console.log("running...");
    }
}

class patoAdapter extends Pato {

    constructor(pato){
        super(pato.name);
    }

    quack(){
        console.log("cococo...");
    }

    run(){
        console.log("running");
    }
}

let pato = new Pato("Jeremias");
let PatoAdapter = new patoAdapter(pato);

console.log(pato);
console.log(pato instanceof Pato);
pato.quack();

console.log(patoAdapter);
console.log(patoAdapter instanceof Pato);
console.log(patoAdapter instanceof patoAdapter);

patoAdapter.quack();
patoAdapter.run();