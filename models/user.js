let mongoose = require('mongoose')
let bcrypt = require('bcrypt-nodejs')

let userSchema = mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true }
})

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
}
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}
module.exports = mongoose.model('User', userSchema)
