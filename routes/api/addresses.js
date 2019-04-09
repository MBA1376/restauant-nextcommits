const express = require('express');
const router = express.Router();
const passport = require('passport');

/**load Address model */
const Address = require('../../models/Address');


/* @route   POST api/restaurant/registerAddress  */
/* @desc    add address for login user */
/* @access  Private */
router.post('/registerAddress' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    const newAddress = req.body;
    newAddress.user = req.user._id;

    const address = new Address(newAddress);
    address.save()
        .then(address => {
            res.json(address);
        })
        .catch(err => console.log(err));
});

/* @route   DELETE api/restaurant/removeAddress  */
/* @desc    remove address for login user */
/* @access  Private */
router.delete('/removeAddress/:id' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    Address.findByIdAndRemove(req.params.id)
        .then(address => res.json(address))
        .catch(err => console.log(err));
});


module.exports = router;