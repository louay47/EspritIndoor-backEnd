const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');


router.post('/userId/:sender/:contenu',function(req, res, next) {

    Comment.create({
     sender: req.params.sender,
  	 contenu: req.params.contenu
  }, function(err, data) {
  	if(err) res.status(500).send(err);
  	else res.send(data);
  });
});

module.exports = router;