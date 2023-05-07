const express = require('express');
const app = express();
const cors =require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
const users =[
    {id:1, name:'john', email:'john@example.com'},
    {id:2, name:'Kabir', email:'kabir@example.com'},
    {id:3, name:'mesha', email:'mesha@example.com'},
    {id:4, name:'babu', email:'babu@example.com'},
]

app.get('/', (req,res)=>{
    res.send('user managements is available')
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users', (req,res)=>{
    console.log(req.body)
    const newUser = req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port,() =>{
    console.log(`server is running on ${port}`)
})