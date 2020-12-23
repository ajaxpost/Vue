const {Schema} = require('./mongoose')

const UserSchema =Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    }
})

module.exports = UserSchema;