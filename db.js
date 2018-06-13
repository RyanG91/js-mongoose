const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/portfolio')

const Enquiry = mongoose.model('Enquiry', {
  name: String,
  email: String,
  phone: String,
  message: String,
})

module.exports = { Enquiry }
