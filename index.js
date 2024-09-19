const express = require('express');
const app = express();
const cors= require('cors')

app.use(cors());

app.post('/new-entry' , (req, res)=>{
    res.send('Hello')
})

app.get('/', (req, res)=>{
    res.send('Hello world')
})

const port = 3000;
app.listen(3000 , ()=>{
    console.log('Server is Running')
})