const student = require('../models/studentModule');

const createPost = async (req, res) => {

    try {
        let createData = req.body;
          
        let postData = await student.create(createData);

        res.status(201).send({ status: true, data: postData });

      } catch(error) {
        res.status(500).send({ status: false, msg: error.message });
      }
    }

module.exports.createPost = createPost;