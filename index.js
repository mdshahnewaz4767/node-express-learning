const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(cors())
app.use(bodyParser.json())

const users = ['Muhammad', 'Shahnewaz', 'Jannatul', 'Maowa', 'Khondokar']

//Get
app.get('/', (req, res) => {
    const fruits = {
        product: 'ada',
        price: 220
    }
    res.send(fruits);
    // res.send("Node you are awesome");
})

app.get('/fruits/banana', (req, res) => {
    res.send({fruits: 'banana', quantity: 200, price: 1000})
})

// app.get('/users/:id', (req, res) => {
//     // console.log(req.params);
//     const userId = req.params.id;
//     const name = users[userId];
//     res.send(name);
// })

app.get('/users/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    console.log(req.query);
    const name = users[id];
    res.send({id, name});
})

//Post
app.post('/addUser', (req, res) => {
    // console.log('Post request send');
    console.log('Data received' ,req.body);
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log("Listening to port 3000"))