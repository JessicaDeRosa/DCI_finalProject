const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        firstName: {
            type: String,
            required: [true, 'Please give your First Name']
        },
        lastName: {
            type: String,
            required: [true, 'Please give your Last Name']
        }
    },
    userName: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique:[true,'the email is already exist']  },
    country: String,
    birthDate:  Date,
    created_at: { type: Date, default: Date.now() },
    gender: { type: String, enum: ['male','female','diverse'] },
    role: { type: String, enum: ['admin', 'customer', 'seller'] },
    address: {
        street: String,
        hous_no: String,
        zip: { type: Number, min: 1000, max: 99999 },
        city: String
    }
    // facebook_id: String,
    // facebook_name: String
});

UserSchema.virtual('fullAddress').get(function () {
    return this.address.street + this.address.hous_no + ' ,' + this.address.zip + ' ' + this.address.city;
})
UserSchema.virtual('fullName').get(function () {
    if (this.middleName)
        return this.name.firstName + ' ' + this.name.middleName + ' ' + this.name.lastName
    else return this.name.firstName + ' ' + this.name.lastName
});




const User = mongoose.model('Users', UserSchema);
module.exports = User;