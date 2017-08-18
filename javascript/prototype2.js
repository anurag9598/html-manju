function Animal(name, numlegs){
    this.name=name;
    this.numlegs= numlegs;
    this.isAlive=true;
}
function duck(name){
    this.name=name;
    this.numlegs=2
}

function donald(name){
    this.name=name;
    this.say="hiiiiii"
}

duck.prototype = new Animal();
donald.prototype = new duck();
var abc = new duck();
var golden = new donald()
