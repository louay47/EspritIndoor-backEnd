const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const Evenement = require('../models/Evenement');

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage

})

router.post('/userId/:sender',upload.single('photo'), function(req, res, next) {
  console.log(req.file);
  console.log(req.body);
    Evenement.create({
    sender: req.params.sender,
    eventName: req.body.eventName,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    photo: req.file.filename,
  }, function(err, data) {
    if(err) res.status(500).send(err);
    else {
      res.send(data)
    }
  });
});

router.post('/photo',upload.single('photo'), function(req, res, next) {
  console.log(req.file);
  console.log(req.body);
    Evenement.create({
    photo: req.file.filename,
  }, function(err, data) {
    if(err) res.status(500).send(err);
    else {
      res.send(data)
    }
  });
});

router.post('/',function(req, res, next) {

    Evenement.create({
    sender: req.body.sender,
  	eventName: req.body.eventName,
  	description: req.body.description,
  	date: req.body.date,
  	photo: req.body.photo
  }, function(err, data) {
  	if(err) res.status(500).send(err);
  	else res.send(data);
  });
});

router.get('/', function(req, res, next) {
  Evenement.find({})
  .exec(function(err, data) {
  	if(err) res.status(500).send(err);
  	else res.send(data);
  })
});

router.delete('/deletEvent/:id', function(req,res) {
  var id = req.params.id;
  Evenement.findOneAndRemove({_id: id}, function(err) {
    if(err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
    
  });
});





module.exports = router;