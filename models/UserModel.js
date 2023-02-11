const mongoose = require("../database/db");

const UserSchema = new mongoose.Schema({
   

}, {timestamps: true})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;