const studentModule = require('../models/studentModule')
const jwt = require('jsonwebtoken')

let login = async function(req, res){
    try{
        let CheckLogin = await studentModule.findOne({email: req.body.email, password: req.body.password})
       // console.log(CheckLogin)

        let token = jwt.sign({
            CheckLogin: CheckLogin._id.toString(),
            organisation: "close_Friend_functonUp"
        },
        "Friend_functionUp"
        );
        res.setHeader("x-api-key", token)
        res.status(500).send({status: true, data: {token}})

    }catch(error){
        res.status(500).send({msg: "Error", error:error.message})
    }
}

module.exports = {login}