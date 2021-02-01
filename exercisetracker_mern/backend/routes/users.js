const router = require('express').Router();
let User = require('../models/user.model');

//below corrosponds to <appurl>/users/
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))   //gets all the users from mongoDB and returns as json 
    .catch(err => res.status(400).json('Error: ' + err)); //catches any errors
});

// corrosponds to <appurl>/users/add
router.route('/add').post((req, res) => {
    const username = req.body.username; //get new user from request body
    const newUser = new User({username}); //create instance

    newUser.save() //save new user to mongoDB
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;