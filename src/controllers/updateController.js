const student = require('../models/studentModule');

const updatePost = async (req, res) => {

    try {
        
        let updateData = req.body

        let upData = await student.findOneAndUpdate({$set: updateData},{new: true});

        res.status(201).send({ status: true, data: upData});

      } catch(error) {
        res.status(500).send({ status: false, msg: error.message });
      }
    }

module.exports.updatePost = updatePost;