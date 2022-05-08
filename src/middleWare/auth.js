
const jwt = require('jsonwebtoken');

const authentication = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        if (!token) token = req.headers["x-Api-Key"];

        if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
    
        let decodedToken = jwt.verify(token, "Friend_functionUp");
        if (!decodedToken)
            return res.status(400).send({ status: false, msg: "token is invalid" })

        req.studentId = decodedToken.CheckLogin
        
        next()

    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }

};
module.exports.authentication = authentication
