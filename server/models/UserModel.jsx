const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

const UserModel = mongoose.models('users', UserSchema)

model.exports = UserModel;