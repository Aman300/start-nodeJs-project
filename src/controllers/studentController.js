
const studentModule = require('../models/studentModule');
const student = require('../models/studentModule'); //student module patn requried sceama
const jwt = require('jsonwebtoken')


//------------------------Create a post ---------------------------------/
const createPost = async (req, res) => {

  try {
    let createData = req.body;

    let postData = await student.create(createData);//create is function to creat a moongooes query to create a date

    res.status(201).send({ status: true, data: postData });

  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
}

module.exports.createPost = createPost; // create post ko public kanta hai


//------------------------Create a end ---------------------------------/

//------------------------login a start ---------------------------------/

let login = async (req, res) => {

  try {

    let { email, password } = req.body

    if (!email) {
      return res.send({ status: false, message: "Email is must be present" })

    } else if (!password) {
      return res.send({ status: false, message: "password is must be present" })

    }

    let checkDd = await studentModule.findOne({ email: email, password: password })

    if (!checkDd) {
      return res.send({ status: false, message: "please enter valid Email and password " })
    }

    let token = jwt.sign({
      checkDd: checkDd._id.toString(),
      orginatsation: "Aman_functionUp",
    }, "key_!@#$%^&*(){}")

    res.setHeader("x-api-key", token)
    res.send({ status: true, date: { token } })

  } catch (error) {
    res.send({ status: false, message: error.message })
  }

}

module.exports.login = login

//------------------------login  a end ---------------------------------/



//------------------------read a post ---------------------------------/
const readPost = async (req, res) => {

  try {
    let getData = await student.find();
    //find is function to finding a all document in mongo DB .

    res.status(201).send({ status: true, data: getData });


  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
}

module.exports.readPost = readPost;


//------------------------read a end ---------------------------------/

//------------------------update  a post ---------------------------------/
const updatePost = async (req, res) => {

  try {

    let id = req.params.id
    let updateData = req.body
    let del = false;

    let upData = await student.findOneAndUpdate({ _id: id }, { $set: updateData, isDeleted: del }, { new: true });

    res.status(201).send({ status: true, data: upData });

  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
}

module.exports.updatePost = updatePost;

//------------------------update a end ---------------------------------/

//------------------------delete a post ---------------------------------/
const deletePost = async (req, res) => {

  try {

    let deletePost = req.params.id

    let deleteData = await student.findOneAndUpdate({ _id: deletePost }, { isDeleted: true }, { new: true });
    //findOneAndUpdate is function to find One document and update and update document .
    res.status(201).send({ status: true, data: deleteData });

  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
}

module.exports.deletePost = deletePost;

//------------------------delete a end ---------------------------------//
