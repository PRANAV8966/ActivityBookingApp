import mongoose from 'mongoose';
import { JWT_KEY, SALT_ROUNDS } from '../config/server-config.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    phone_number: {
        type: Number
    },
    activity : [{
        type: mongoose.Types.ObjectId,
        ref: 'Activity',
        required: true
    }]    
}, {timestamps:true});

userSchema.pre('save', async function(next) {
    const user = this;
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const encryptedPassword = await bcrypt.hash(user.password, salt);
    user.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(Password) {
    return bcrypt.compareSync(Password, this.password);
};

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, JWT_KEY, {expiresIn: '1h'});
};

const User = mongoose.model('User', userSchema);

export {
    User
}