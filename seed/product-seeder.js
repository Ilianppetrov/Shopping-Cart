let Product = require('../models/product')
let mongoose = require('mongoose')
mongoose.PromiseProvider = global.PromiseProvider
let connection = 'mongodb://localhost:27017/shopping'
mongoose.connect(connection)

new Product({
  imagePath: 'http://www.wallpapereast.com/static/images/001_Fish-Wallpaper-HD_hkNsK33.jpg',
  title: 'nice',
  description: 'bla',
  price: 10
}).save()

