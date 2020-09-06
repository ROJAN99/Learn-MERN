const router = require('express').Router();
let User = require('../models/user.model');

//route that hanlde HTTP Get request on slash users path (/users/...)
router.route('/').get((req, res) => {
    //find returns promise return users we fot from DB in JSON
    User.find()                         
        .then(users => res.json(users))  
        .catch(err => res.status(400).json('Error: ' + err));  //if error then give this error message
});


//route that handle HTTP Post request
router.route('/add').post((req, res) => {
    //new username and user
    const username = req.body.username;  
    const newUser = new User({username});

    //save user to DB
    newUser.save()
        .then(() => res.json('User added')) //add user
        .catch(err => res.status(400).json('Error: ' + err)); //else error
});
    
module.exports = router;