function person(age){
    this.age = age;
    this.place = "india"
}


person.prototype.job=function(){
    console.log("i am doing nothingg")
}

var rohan  = new person(52);

var aisha = new person(25);