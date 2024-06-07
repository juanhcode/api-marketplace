const User = require('../database/models/user.model');
const bcrypt = require('bcrypt');
const isValidEmail = async (email_address) => {
    const isEmailExists = await User.findOne({
        where: {
            email_address,
        }
    })
    return isEmailExists;
}
const createUser = async (newUser) => {
    const { name, email,password,location } = newUser;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
        name,
        email,
        password: passwordHash,
        photo:" ",
        location,
    });
    try {
        await user.save();
        return true;
    } catch (error) {
        return error;
    }
}

module.exports = {
    isValidEmail,
    createUser
}