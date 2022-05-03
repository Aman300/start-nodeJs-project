const express = require('express');
const router = express.Router();

const curdOperation = require("../controllers/crudOperationController")
const login = require("../controllers/loginController")

router.post('/login', login.login)

router.post('/createPost', curdOperation.createPost);
router.get('/readPost',     curdOperation.readPost);
router.put('/updatePost/:id',  curdOperation.updatePost);
router.put('/deletePost/:id',  curdOperation.deletePost);

module.exports =  router;

