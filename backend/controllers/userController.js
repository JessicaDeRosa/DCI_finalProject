const User = require('../models/User');

// save/create a user account
exports.createUser = (req, res) => {
    //  console.log(req.body)

    const newUser = {
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            
        },
        userName:req.body.userName,
        password: req.body.password,
        email: req.body.email,
        country: req.body.country,
        birthDate: req.body.birthDate,
        gender: req.body.gender,
        role: req.body.role,
        address: {
            street: req.body.street,
            hous_no: req.body.hous_no,
            zip: req.body.zip,
            city: req.body.city
        },
        profilePic:req.file
    }
    console.log(newUser)
            new User(newUser).save(err => {
                if (err) {res.json(err.message)}
                else
                res.json('user Created')
            })
       
  

    
}
 exports.logIn= (req,res)=> {
       
     User.findOne({email:req.body.email,password: req.body.password},(err,user)=>{
         if(user){
             //req.session.user=user;
             return res.json(user)
            }
        else{
           res.json('user not found')
         }
       
    })
 }


