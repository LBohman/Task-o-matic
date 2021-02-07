const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('../model/task');
require('dotenv').config();


router.get('/', async (req, res) => {
    const data = await Task.find();
    res.render('index.ejs', { data: data });
});

router.post('/add', async (req, res) => {
    console.log(req.body.task);
    try{
        await new Task({
            task: req.body.task
        }).save();
        res.redirect('/');
    } catch (err) {
        //console.log(err);
    }
});


/* router.post('/add', async (req, res) => {
    console.log(req.body.task);
    let task = new Task({
        task: req.body.task,
        date: req.body.date
    });
    try{
        await task.save();
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}); */

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