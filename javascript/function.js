function add(a,b){
    return a+b
}

var add = function(a,b){
    return a+b;
}

add(4.525,564)

function isEven(a){
    if(a%2==0){
        console.log("numm is even")
    }else{
        console.log("numm is odd")
    }
}

isEven(10);

function reverse(a){
    var name=""
    for(i=a.length;i>=0;i--){
        name +=a[i]
    }
    return name
}

var a =10;
function scop(a){
    var b = 20
}