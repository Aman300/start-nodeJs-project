const student = require('../models/studentModule');

const readPost = async (req, res) => {

    try {
              
        let getData = await student.find();

        res.status(201).send({ status: true, data: getData });

      } catch(error) {
        res.status(500).send({ status: false, msg: err.message });
      }
    }

module.exports.readPost = readPost;