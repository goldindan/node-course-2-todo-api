const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongoDb Server');
    }

    console.log('Connected to Db Server');

    var db = client.db('TodoApp');


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a93d234fd2769eb8a5f896e')
    },{
        $set:{
            name: 'Dan'
        },
        $inc:{
            age: 1
        }
    },{
            returnOriginal: false 
        }).then((res) => {
            console.log(res);
        });
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res)=>{
    //     console.log(res);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res)=>{
    //     console.log(res);
    // });

    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((res)=>{
    //     console.log(res);
    // });
    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos ', err);
    // });

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