const studentModule = require('../models/studentModule')
//const loginController = require('../controllers/crudOperationController')
const jwt = require('jsonwebtoken')
const { checkout } = require('../routes/route')

let login = async function(req, res){
    try{
        let CheckLogin = await studentModule.findOne({email: req.body.email, password: req.body.password})
        console.log(CheckLogin)

        let tocken = jwt.sign({
            CheckLogin: CheckLogin._id.toString(),
            organisation: "close_Friend_functonUp"
        },
        "Friend_functionUp"
        );
        res.setHeader("x-api-key", tocken)
        res.status(500).send({status: true, data: tocken})

    }catch(error){
        res.status(500).send({msg: "Error", error:error.message})
    }
}

module.exports.login = login