const student = require('../models/studentModule');

const deletePost = async (req, res) => {

    try {
        
        let deletePost = req.params.id

        let deleteData = await student.findOneAndUpdate({_id: deletePost},{isDeleted: true},{new: true});

        res.status(201).send({ status: true, data: deleteData});

      } catch(error) {
        res.status(500).send({ status: false, msg: error.message });
      }
    }

module.exports.deletePost = deletePost;