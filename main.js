const express = require('express');
const tasksRouter = require('./routes/tasks');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Task = require('./model/task');
require('dotenv').config();

const app = express();

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', tasksRouter);

app.get('/', (req, res) => {
    const tasks = [{
        task: "Remove nailpolish",
        createdAt: new Date
    },
    {
        task: "Do laundry",
        createdAt: new Date
    }]
    res.render('index', { tasks: tasks });
});

app.post('/', (req, res) => {

})


mongoose.connect(process.env.CONNECTIONSTRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) return;
        app.listen(process.env.PORT || 3000, () => {
            console.log('App is up and running...');
        })
    })