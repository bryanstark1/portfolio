const express = require('express');
const router = express.Router();

// GET Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// GET About page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// GET Resumé page
router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'resume' });
});

module.exports = router;