const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5a9529cdfd2769eb8a5fb037';

if(!ObjectID.isValid(id)){
    return console.log('Invalid id');
}

User.findById(id).then((user)=>{
    if(!user){
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((err)=>{
    console.log(err);
});

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((err)=>{
//     console.log(err);
// })