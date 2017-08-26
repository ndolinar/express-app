const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send({type: 'GET', message: 'Welcome to home page'});
});

router.get('/about', function(req, res, next) {
  res.send({type: 'GET', message: 'Welcome to the about page'});
});

router.get('/contact', function(req, res, next) {
  res.send({type: 'GET', message: 'Welcome to the contact page'});
});

router.get('/articles', function(req, res, next) {
  res.send('Articles page');
});

router.get('/article/:id', function(req, res, next) {
  res.send({message: 'Hello to the article page for id: ' + req.params.id});
});

module.exports = router;
