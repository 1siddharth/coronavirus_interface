const express = require("express")
const mongoose = require('mongoose')

const router = express.Router();

const Pub  = require("../modal/public")
router.post("/" , (req ,res) =>{

 const profileValues = {};

    if (req.body.name) profileValues.name = req.body.name;
    if (req.body.dob) profileValues.dob = req.body.dob;
    if (req.body.email) profileValues.email = req.body.email;
    if (req.body.phone) profileValues.phone = req.body.phone;
    if (req.body.symtoms) profileValues.symtoms = req.body.symtoms;
    if (req.body.travelhistory) profileValues.travelhistory = req.body.travelhistory; 
    if (req.body.address) profileValues.address = req.body.address; 


Pub.findOne({email:profileValues.email})
    .then(pub =>{
    	if(pub){console.log("email already registerd")}
    	else
    	{
new Pub(profileValues).save()
.then(profile => res.json(profile))
.catch(err => console.log(err))

    	}

    }

    )
    .catch(err => console.log(err))



console.log("submitted")

})



module.exports = router;