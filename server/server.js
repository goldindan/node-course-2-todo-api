var express = require('express');
var bodyParser = require('body-parser');
var admin = require('firebase-admin');
var serviceAccount = require('./firebase-keys.json');

var {mongoose}  = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

//FireBase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://iesnet-de727.firebaseio.com'
  });

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/mess', (req, res) => {
    // The topic name can be optionally prefixed with "/topics/".
    var topic = 'IES';

    // See documentation on defining a message payload.
    var message = {
    data: {
        score: '850',
        time: '2:45'
    },
    notification:{
        body: 'Notification body'
    },
    topic: topic
    };

    // Send a message to devices subscribed to the provided topic.
    admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        //console.log('Successfully sent message:', response);
        res.status(200).send('Successfully sent message:'+ response);
    })
    .catch((error) => {
        //console.log('Error sending message:', error);
        res.status(404).send('Error sending message:'+ error);
    });
});

app.post('/todos',(req, res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }, (e) =>{
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(400).send('Invalid Id');
    }

    Todo.findById(id).then((todo)=>{
        if(!todo){
            res.status(400).send('Todo no found');
        }
        res.send(todo);
    }).catch((err)=>{
        res.status(400).send(err);
    });
});


app.listen(port, ()=>{
    console.log('Started on port ', port);
})





module.exports = {
    app
}