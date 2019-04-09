const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {secretOrKey} = require('../../config/keys');

/** load validations */
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

/**load sms api */
var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({apikey: '5348392F6C6C6A6D454E535A746246786842646A44783938496A4F6B3050344D'}); 

/** load user model*/
const User = require('../../models/User');


/* @route   POST api/users/getPhoneNumber  */
/* @desc    get phone number and send activation code to users route */
/* @access  Public */
router.post('/getPhoneNumber' , (req , res) => {
    const errors = {};
    api.Send({ message: "خدمات پیام کوتاه کاوه نگار" , sender: "100065995" , receptor: "09114187116"});
});


/* @route   POST api/users/register  */
/* @desc    register users route */
/* @access  Public */
router.post('/register' , (req , res) => {
    const { errors , isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email :req.body.email})
        .then( user => {
            if(user) {
                errors.email = 'this user already exists';
                return res.status(400).json(errors);
            }
            const avatar = gravatar.url(req.body.email , {
                s : '200' , //size
                r : 'pg' , //rating
                d : 'mm' //default
            });

            const newUser = new User({
                name : req.body.name ,
                email : req.body.email ,
                password : req.body.password ,
                avatar
            });
            
            bcrypt.genSalt(10 , (err , salt) => {
                bcrypt.hash(newUser.password , salt , (err , hash) => {
                    if(err) console.log(err);
                    
                    newUser.password = hash;

                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => res.status(400).json(err));
                });
            });
        })
});


router.post('/login' , (req , res) => {
    const { errors , isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    
    User.findOne({email : req.body.email})
        .then(user => {
            if(!user) {
                errors.email = 'user not found';
                return res.status(404).json(errors);
            }
            
            const userPassword = user.password;

            bcrypt.compare(req.body.password , userPassword)
                .then(isMatch => {
                    if(!isMatch) {
                        errors.password = 'password is not match';
                        return res.status(400).json(errors);
                    }

                    console.log('user match');

                    const payload = {id : user.id , name : user.name , avatar : user.avatar};

                    jwt.sign(payload , secretOrKey , {expiresIn : 3600} , (err , token) => {
                        if(err) throw err;

                        res.json({
                            success : true ,
                            token :'Bearer ' + token
                        });
                        
                    })

                });
        });
})


module.exports = router;