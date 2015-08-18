/**
 * Create /
          Post
 */

var Post = require('../models/post');
exports.create = function(req, res) {
  var post = new Post(req.body);
  post.save(function(err) {
    if (err) {
      return res.json(err);
    }
    res.json(post);
  });
};

exports.get = function(req, res) {
  Post.find(function(err, posts) {
    if (err) {
      return res.json(err);
    }
    res.json(posts);
  });
};
