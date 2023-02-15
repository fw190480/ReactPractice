// we are going to create a infinite currying function with the help of recursive function

function sum(a){
    return function(b){
        if(b) return sum(a+b);
        else return a;
    }
}

console.log(sum(45)(5)())