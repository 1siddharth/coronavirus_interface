const express = require("express")
const path = require('path')
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const host = '127.0.0.1'
const port = '3000'
const app = express()
app.use(bodyparser.urlencoded({extended :false}))
app.use(bodyparser.json())

const db = require("./connect/myurl").mongoURL
//const home = require("./html/landingpage.html")
mongoose.connect(db).then(() => console.log("connected"))
.catch((err)=> console.log(err))

const medical = require("./routes/medical")
const public= require("./routes/public")
const login= require("./routes/login")
 app.use(express.static(__dirname + '/frontend'))
 app.use(express.static(__dirname + '/frontend/images'))

app.get("/" , (req ,res)=>{
	res.sendFile(path.join(__dirname + "/frontend/landingpage.html"))
	console.log("here running")
})

app.get("/mform" ,(req,res) => {
	res.sendFile(path.join(__dirname + "/frontend/medicoform.html"))
	console.log("on medical page")
})

app.get("/pform" ,(req,res) => {
	res.sendFile(path.join(__dirname + "/frontend/publicform.html"))
	console.log("on public page")
})

app.get("/map" ,(req,res) => {
	res.sendFile(path.join(__dirname + "/frontend/map.html"))
	console.log("on public page")
})
app.get("/login" ,(req,res) => {
	res.sendFile(path.join(__dirname + "/frontend/login.html"))
	console.log("on login page")
})


app.use("/mform/medicosub",medical)
app.use("/pform/public",public)
app.use("/login",login)

app.listen(port , ()=> {console.log(`running at ${port} and ${host}`)})
