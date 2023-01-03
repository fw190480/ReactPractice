// console.log('hi')
// fetchData(`https://fakestoreapi.com/products`)
// fetchDataByAsync(`https://fakestoreapi.com/products`)
function fetchData(url){
let data = fetch(url);
// console.log(data)
data.then(res=>{
    console.log(res)
    // return res.json()
    return "hi"
})
.then(res=>{
    console.log(res)
})
}

async function fetchDataByAsync(url){
    let data = await (await fetch(url)).json()
    // let res = await data.json()
    console.log(data)
}

// let str = "rahul";
// console.log('start')
let str = new Promise((resolve,reject)=>{
    // console.log('before promise')
    let condition = true;
    if(condition) resolve('rahul');
    else reject('wrong-name')
    // console.log('after promise')
})
str.then(res=>{
    console.log(res);
    return "kumar"
    // throw 'error'
})
.then(res=>{
    console.log(res)
    return new Error('this is new error')
})
.then(res=>{
    console.log(res);
    return 'at last'

})
.catch(err=>{
    console.log(err,'inside catch');
    // return 'at last'
})
.then(res=>{
    console.log(res)

})
// console.log('end')