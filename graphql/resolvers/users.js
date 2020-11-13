const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../../config');
const User = require('../../models/User');

module.exports = {
    Mutation: {
        async register( _, {registerInput : username, email, password, confirmPassword}, context, info){
            // TODO: validate user data
            // TODO: make sure user doesnt already exist
            // TODO: Hash password and create an auth token
            const saltRounds = 12;
            password = bcrypt.hash(password, saltRounds, (err,hash)=>{});

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, SECRET_KEY, {expiresIn: '1h'});
            return {
                ...res._doc,
                id: res._id,
                token

            }
        }
    }
}