const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'niti$hisagoodboy';


// 1. Create User
router.post('/createUser', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        contact: req.body.contact
    })

    let record = await user.save();
    res.status(200).json({ record });
})


// 2. Login
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user)
    {
        return res.status(400).json({success: false, error: 'Enter valid credentials'});
    }
    else
    {
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(passwordCompare === false)
        {
            return res.status(404).json({success: false, error: 'Enter valid credentials'})
        }
        else
        {
            const data = {
                cred: {
                    email: user.email,
                    password: user.password,
                    name: user.name,
                    contact: user.contact
                }
            }
            const token = jwt.sign(data, JWT_SECRET);

            return res.status(200).json({success: true, user, token});
        }
    }
})





router.post('/auto', async (req, res) => {
    const decode = jwt.verify(req.header('token'), JWT_SECRET);
    
    let user = await User.findOne({email: decode.cred.email});

    console.log(decode.cred.password == user.password)

    if(decode.cred.password == user.password)
    {
        return res.status(200).json({success: true, user});
    }
})










module.exports = router;