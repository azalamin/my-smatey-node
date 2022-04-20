const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users  = [
    {id: 1, name: "Salman", email: 'salman@gmail.com'},
    {id: 2, name: "Sadik", email: 'Sadik@gmail.com'},
    {id: 3, name: "Rahim", email: 'Rahim@gmail.com'},
    {id: 4, name: "Zabbar", email: 'Zabbar@gmail.com'},
    {id: 5, name: "Sadiku", email: 'Sadiku@gmail.com'},
    {id: 6, name: "Lamima", email: 'Lamima@gmail.com'},
    {id: 7, name: "Shamim", email: 'Shamim@gmail.com'},
    {id: 8, name: "Shahal", email: 'Shahal@gmail.com'},
    {id: 9, name: "Tanvir", email: 'Tanvir@gmail.com'},
    {id: 10, name: "Sakib", email: 'Sakib@gmail.com'},
]

app.get('/', (req, res) => {
    res.send('I am going to revel something')
})

app.get('/users', (req, res) => {
    console.log(req.query); 
    if (req.query.name) {
        const search = req.query.name.toLowerCase() ;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    } else{

    }
    res.send(users)
})
app.get('/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId)
    const user = users.find(u => u.id === userId);
    res.send(user)
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log("Listening to ", port);
})