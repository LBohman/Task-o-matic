const express = require('express');
const bodyParser = requrie('body-parser');
const mongoose = require('mongoose');
const Task = require('./model/task');
require('dotenv').config();

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');