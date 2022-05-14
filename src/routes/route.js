const express = require('express');
const router = express.Router();

const curdOperation = require("../controllers/studentController")

router.post('/create', curdOperation.createPost);
router.get('/read', curdOperation.readPost);
router.put('/update/:id',curdOperation.updatePost);
router.delete('/delete/:id',curdOperation.deletePost);

module.exports =  router;

