const express = require('express');

const app = express();

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

app.listen(3000, () => console.log("Listening to port 3000"))