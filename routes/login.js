const express = require("express")
const router = express.Router();
const bcrypt = require('bcryptjs')
const Med  = require("../modal/medical")
router.post("/",(req,res)=>
{
const email = req.body.email
const password = req.body.password

Med.findOne({email})
.then( med =>{

	if(med){
		if(bcrypt.compare(password ,med.password))
		{
			console.log("login sucessfull")
		}
		else{console.log("incorrect credentials")}
	}
else{console.log("incorrect credentials")}
}


	)
.catch(err =>console.log(err))


})


module.exports = router;