var bob = new Object();
bob.age = 10;
bob.setage = function(newAge){
    bob.age=newAge
}

var setage = function(newAge){
    this.age = newAge;
}


var tony = new Object();
tony.age = 10;
tony.setage= setage;

var fluffy = new Object();
fluffy.age = 20;
fluffy.setage = setage;


function Dog(breed){
    this.breed = breed;
    this.legs = 4;
}

var snoppy = new Dog("pug");
var fluffy = new Dog("lab")
