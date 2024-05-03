const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const path = require('path')
const UserModel = require('./models.UserModel')

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(cookieParser())

mongoose.connect("mongodb+srv://mindyhern8976:698976MaOH79@cluster0.cf1glxh.mongodb.net/");

const verifyUser = (req, res, next) => {
    const token = req.cookies('token');
    if(!token) {
        return res.json("The token is missing")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) {
                return res.json("The token is wrong")
            } else {
                req.email = decoded.email;
                req.username = decoded.username;
                next()
            }
        })
    }
}

app.get('/', verifyUser, (req, res) => {
    return res.json({email: req.email, username: req.username})
})

app.post('/register', (req, res) => {
    const {username, email, password} =req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({username, email, password: hash})
        .then(user=> res.json(user))
        .catch(err => res.json(err))
    }).catch(err => console.log(err))

})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if(response) {
                    const token = jwt.sign({email: user.email, username: user.username},
                        "jwt-secret-key", {expiresIn:'1d'})
                    res.cookie('token', token)  
                    return res.json("Success")  
                } else {
                    res.json("Password is incorrect");
                } 
            })    
        } else {
            res.json("User does not exist")
        }
    })
})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json("Success")
})

app.listen(3001, () => {
    console.log("Server is Running")
})