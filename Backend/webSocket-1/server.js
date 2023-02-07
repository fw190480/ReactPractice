// const express = require('express')
import express from 'express'
import path from 'path';
import file from "path"
const app = express();
const PORT = 8080
app.use(express.json());
app.get('/',async(req,res)=>{
    // res.sendFile('/index.html')

    res.send('hi')
})
app.listen(PORT,()=>{
    console.log('listening on port http://localhost:8080')
})