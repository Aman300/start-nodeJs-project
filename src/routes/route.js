const express = require('express');
const router = express.Router();

const curdOperation = require("../controllers/crudOperationController")
const login = require("../controllers/loginController")
const middWare = require("../middleWare/auth")


router.post('/login', login.login)

router.post('/createPost', curdOperation.createPost);
router.get('/readPost',   middWare.authentication,curdOperation.readPost);
router.put('/updatePost/:id',curdOperation.updatePost);
router.put('/deletePost/:id',middWare.authentication,curdOperation.deletePost);

module.exports =  router;

