const mongoose = require('mongoose');

let LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photos: {
    type: [String],
    required: true
  }
});

let Location = mongoose.model('Location' , LocationSchema);

module.exports = {Location};
