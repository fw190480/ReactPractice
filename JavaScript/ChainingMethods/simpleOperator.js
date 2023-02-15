
const simpleOperators = {
    total:0,
    add(value){
        this.total+=value;
        return this;
    },
    sub(value){
        this.total-=value;
        return this;
    },
    multiply(value){
        this.total*=value;
        return this;
    },
    divide(value){
        this.total/=value;
        return this;
    }
};
let ans1 = simpleOperators.add(5).sub(2).multiply(10).divide(9).total
console.log(ans1)