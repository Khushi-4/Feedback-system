 const mongoose = require('mongoose');

 const feedbacksystem = new mongoose.Schema({
       name: String,
       contactNumber: String,
       email: String,
       feedback: string
 })

 module.exports= mongoos.mode('feedback',feedbackschema);