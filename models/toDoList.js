const mongoose = require('mongoose');
const Joi = require('joi');

const todoListSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isDone: {
        type: Boolean,
        default: false
    },
    description:{
        type: String,
        minlength: 5,
        maxlength: 255
    }
});

const Todo = mongoose.model('Todo', todoListSchema);

function validateList(todo){
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        isDone: Joi.boolean(),
        description: Joi.string().min(5).max(255)
    });
    return schema.validate(todo);
}
exports.Todo = Todo;
exports.validate = validateList;