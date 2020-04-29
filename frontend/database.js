var express = require('express')
var mongoose = require('mongoose')
const bodyparser = require("body-parser")

var app = express()

app.use(bodyparser.urlencoded({extended :false}))
app.use(bodyparser.json())

const db = require("./setup/myurl").mongoURL

mongoose.connect(db).then(() => console.log("connected"))
.catch((err)=> console.log(err))

