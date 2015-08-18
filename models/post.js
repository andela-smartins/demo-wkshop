var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Post', postSchema);
