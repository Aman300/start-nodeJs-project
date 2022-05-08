

const studentModule = require('../models/studentModule');
const student = require('../models/studentModule'); //student module patn requried sceama


//------------------------Create a post ---------------------------------/
const createPost = async (req, res) => {

    try {
        let createData = req.body;
          
        let postData = await student.create(createData);//create is function to creat a moongooes query to create a date

        res.status(201).send({ status: true, data: postData });

      } catch(error) {
        res.status(500).send({ status: false, msg: error.message });
      }
    }

module.exports.createPost = createPost; // create post ko public kanta hai

//------------------------Create a end ---------------------------------/
//------------------------read a post ---------------------------------/
const readPost = async (req, res) => {

  try {
      let getData = await student.find();
      //find is function to finding a all document in mongo DB .

      res.status(201).send({ status: true, data: getData });
      

    } catch(error) {
      res.status(500).send({ status: false, msg: err.message });
    }
  }

module.exports.readPost = readPost;


//------------------------read a end ---------------------------------/
//------------------------delete a post ---------------------------------/
const deletePost = async (req, res) => {

  try {     

    let deletePost = req.params.id
    let decodeAuthorid = req.studentId;

    if (deletePost != decodeAuthorid) {
      return res.status(401).send({ msg: "you can't change the blog " })
    }     
      let deleteData = await student.findOneAndUpdate({_id: deletePost},{isDeleted: true},{new: true});
      //findOneAndUpdate is function to find One document and update and update document .
      res.status(201).send({ status: true, massage: "you are authrized", data: deleteData});

    } catch(error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  }

module.exports.deletePost = deletePost;

//------------------------delete a end ---------------------------------//
//------------------------update  a post ---------------------------------/
const updatePost = async (req, res) => {

  try {
      
      let id = req.params.id
      let updateData = req.body
      let del = false;

      let decodeId = req.studentId;
      if(id != decodeId){
        return res.status(400).send({status: false, massage: "you are not authorized"})
      }

      let upData = await student.findOneAndUpdate({_id: id},{$set: updateData, isDeleted: del},{new: true});

      res.status(201).send({ status: true, data: upData});

    } catch(error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  }

module.exports.updatePost = updatePost;

//------------------------update a end ---------------------------------/