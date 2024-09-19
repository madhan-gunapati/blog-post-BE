const express = require('express');
const app = express();

app.post('/new-entry' , (req, res)=>{
    res.send('Hello')
})

const port = 3000;
app.listen(3000 , ()=>{
    console.log('Server is Running')
})