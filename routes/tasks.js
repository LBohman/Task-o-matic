const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res) => {
    res.send('in tasks')
});

router.post('/new', (req, res) => {
    const tasks = [{
        task: "Remove nailpolish",
        createdAt: new Date
    },
    {
        task: "Press submit and post to /new",
        createdAt: new Date
    }]
    res.render('index', { tasks: tasks });
    console.log('Add button clicked');
});

router.get('/edit', (req, res) => {
    console.log('Edit link pressed');
    res.render('edit.ejs');
});

router.post('/edit', (req, res) => {
    console.log('Changes saved.');
    res.redirect('/');
});

router.get('/delete', (req, res) => {
    console.log('Delete link pressed');
    res.redirect('/');
});

module.exports = router;