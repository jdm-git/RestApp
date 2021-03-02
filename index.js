const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const todos = require('./routes/todos');
const app = express();
const config = require('config');

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/task', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false} )
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/todos', todos)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));