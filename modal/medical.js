var express = require('express')
var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MedSchema = new Schema(
{
name: {
	type:String,
	required :true,
},
AssociatedDepartment: {
	type:String,
	required :true,	
},
email: {
	type:String,
		
},
password: {
	type:String,
		
},

phonenumber: {
	type:String,
	required :false,	
},
currentpost: {
	type:String,
	required:true
},
Registered :{
	type:String,
	required :true,	
},

date: {
	type:Date,
	default : Date.now,	
},
}


	)
module.exports =medical= mongoose.model("Medical" , MedSchema)