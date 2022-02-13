const express = require('express.js');

const app = express

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:3000/todos', function(err, client) {
    if (err) throw err

    db = client.db('todos')

    db.collection('mammals').find().toArray(function(err, result) {
        if (err) throw err

        console.log(result)
    })
})

app.get('/', (req, res) => {
    res.json('did this work');
});

app.get('/todos', async(req, res) => {
    const todos = await db.collection('todos').find().toArray();
    res.json(todos);
});


app.listen(3000, () => {
    console.log('im working!')
});