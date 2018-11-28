const mongoose = require('mongoose');


module.exports = mongoose.model('Shape',
  {
    name: {
      type: String,
      index: true,
      unique: true
    },
    numberOfSides: {
      type:Number,
      unique:true
    },
  });