const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const user =[
    {id:1, name:'john', email:'john@example.com'},
    {id:2, name:'Kabir', email:'kabir@example.com'},
    {id:3, name:'mesha', email:'mesha@example.com'},
    {id:4, name:'babu', email:'babu@example.com'},
]

app.get('/', (req,res)=>{
    res.send('user managements is available')
})

app.get('/users',(req,res)=>{
    res.send(user)
})

app.listen(port,() =>{
    console.log(`server is running on ${port}`)
})