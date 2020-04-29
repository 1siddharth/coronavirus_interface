var express = require('express')
var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PubSchema = new Schema(
{
name: {
	type:String,
	required :true,
},
dob: {
	type:String,
	required :true,	
},
email: {
	type:String,
		
},
phone: {
	type:String,
	required :false,	
},
symtoms: {
	type:String,
	
},
travelhistory:{
	type:String,
	required :true,	
},
address:{
	type:String,
	required :true,	
},
date: {
	type:Date,
	default : Date.now,	
},
}


	)
module.exports =public= mongoose.model("Public" , PubSchema)