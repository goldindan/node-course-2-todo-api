const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongoDb Server');
    }

    console.log('Connected to Db Server');

    // const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err,res)=>{
    //     if(err){
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Dan',
    //     age: 43,
    //     location: 'Israel'
    // }, (err, res) => {
    //     if(err){
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //     console.log(res.)
    // });

    client.close();
});