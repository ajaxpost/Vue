const {model} = require('./mongoose')
const UserSchema = require('./Schema');
const Model = model('User', UserSchema, 'users');

module.exports = Model
