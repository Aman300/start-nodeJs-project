const student = require('../models/studentModule');

const updatePost = async (req, res) => {

    try {
        
        let id = req.params.id
        let updateData = req.body
        let del = false;

        let upData = await student.findOneAndUpdate({_id: id},{$set: updateData, isDeleted: del},{new: true});

        res.status(201).send({ status: true, data: upData});

      } catch(error) {
        res.status(500).send({ status: false, msg: error.message });
      }
    }

module.exports.updatePost = updatePost;