let mongoose = require('mongoose')

let productSchema = mongoose.Schema({
  imagePath: String,
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  added: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', productSchema)
