const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb+srv://neha:singh@cluster0.nznbcxe.mongodb.net/ajackus?retryWrites=true&w=majority&appName=Cluster0");

module.exports = { connection };    