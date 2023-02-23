
function MyArray(){
 Object.defineProperty(this,'length',{
    value:0,
    enumerable:false,
    writable:true
 })
// this.length=0
};

MyArray.prototype.push = function(){
    for(let elem of arguments){
        this[this.length] = elem;
        this.length++
    };
    return this.length;
   
}

MyArray.prototype.pop = function(){
    this.length--;
    let popElem = this[this.length];
    delete this[this.length];
    return popElem;
}

MyArray.prototype.map = function(cb){
    let updatedObject = new MyArray()
    for(let index in this){
       if( this.hasOwnProperty(this[index])){
        let res = cb(this[index],index,this)
       if(res) updatedObject.push(res)
       }
       
    };
    return updatedObject
}




let arr = new MyArray();
let res = arr.push(1,2,2,40,5,9);
let answer = arr.map((ele,index)=>{
    // console.log(ele)
    return ele+100
})

let arr2 = new MyArray();
console.log(arr.length)
console.log(answer)
// console.log(answer)

