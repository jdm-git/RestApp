const {Todo, validate} = require('../models/toDoList');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const todos = await TodoList.find().sort('name');
    res.send(todos);
})
// router.get('/:id', async(req,res) => {

//     const todo = await TodoList.findById(req.params.id);
//     //if(!todo) return res.status(404).send('The ToDo with the given ID was not found.');

//     //res.send(todo);


// })

router.post('/', async(req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let todo = new Todo({
        name: req.body.name,
        isDone: req.body.isDone,
        description: req.body.description
    });
    todo = await todo.save();

    res.send(todo);
})
router.put('/:id', async(req, res) => {

    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    const todo = await Todo.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        isDone: req.body.isDone,
        description: req.body.description
    },{
        new: true
    });

    if(!todo) return res.status(404).send('The todo with given ID was not found.');

    res.send(todo);
})

router.delete('/:id', async(req, res) => {
    
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if(!todo) return res.status(404).send('The todo with given ID was not found.');

    res.send(todo);
})
module.exports = router;