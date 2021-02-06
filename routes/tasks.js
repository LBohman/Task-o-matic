const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res) => {
    res.send('in tasks')
});

module.exports = router;