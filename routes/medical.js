
var express = require('express')
const mongoose = require('mongoose')
var a = require("js-alert")
const bcrypt = require('bcryptjs')
const router = express.Router();

const Med  = require("../modal/medical")

router.post("/" , (req ,res) =>{

 const profileValues = {};

    if (req.body.name) profileValues.name = req.body.name;
    if (req.body.AssociatedDepartment) profileValues.AssociatedDepartment = req.body.AssociatedDepartment;
    if (req.body.email) profileValues.email = req.body.email;
    if (req.body.phonenumber) profileValues.phonenumber = req.body.phonenumber;
    if (req.body.currentpost) profileValues.currentpost = req.body.currentpost;
    if (req.body.Registered) profileValues.Registered = req.body.Registered;  
    if (req.body.password) profileValues.password = req.body.password;
    if (req.body.cpassword) ok= req.body.cpassword;
    
    if (req.body.phonenumber) profileValues.phonenumber = req.body.phonenumber;
if(ok== profileValues.password)
{
  
    Med.findOne({email:profileValues.email})
    .then(med =>{
    	if(med){console.log("email already registerd")}
    	else
    	{

bcrypt.genSalt(10, (err , salt)=>{
                bcrypt.hash(profileValues.password ,salt,(err ,hash)=>{
                    if(err) throw err;
                    profileValues.password = hash
                    
                    })
                })


new Med(profileValues).save()
.then(profile => res.json(profile))
.catch(err => console.log(err))

    	}

    }

    )
    .catch(err => console.log(err))

	
console.log("submitted")

}
else{

	
	res.redirect("/mform")
}
})

module.exports = router;