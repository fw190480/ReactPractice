const app = require('express')();
const PORT = 8080;

const Middlware1 = (req,res,next)=>{
    console.log("MIddleware1");
    next()
}
const Middlware2 = (req,res,next)=>{
    console.log("MIddleware2");
    next()
}
const findTheReq = (req,res,next)=>{
    console.log(req.url);
    next();
}
const Middlware3 = (req,res,next)=>{
    console.log("MIddleware3");
    next()
}

app.use(Middlware1);

app.get('/',Middlware2,(req,res)=>{
    console.log("I am inise");
    res.send("HelloIs it working")
});


app.listen(PORT);