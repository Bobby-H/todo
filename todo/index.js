const express = require('express.js');

const app = express

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/todos', function(err, client) {
    if (err) throw err

    var db = client.db('todos')

    db.collection('mammals').find().toArray(function(err, result) {
        if (err) throw err

        console.log(result)
    })
})

app.get('/', (req, res) => {
    res.json('did this work');
});

app.listen(3000, () => {
    console.log('im working!')
});