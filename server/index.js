const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const path = require('path')
const UserModel = require('./models/UserModel')

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(cookieParser())

mongoose.connect("mongodb+srv://mindyhern8976:698976MaOH79@cluster0.cf1glxh.mongodb.net/");

app.post('/register', (req, res) => {
    const {username, email, password} =req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({username, email, password: hash})
        .then(user=> res.json(user))
        .catch(err => res.json(err))
    }).catch(err => console.log(err))

})

app.listen(3001, () => {
    console.log("Server is Running")
})