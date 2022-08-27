const express = require('express');
const {
  homepageshow,
  aboutpageshow,
  contactpageshow,
  servicespageshow,
  resultpageshow,
} = require('../controllers/pagecontrollers');

const router = express.Router();

router.get('/', homepageshow);
router.get('/home', homepageshow);
router.get('/about', aboutpageshow);
router.get('/contact', contactpageshow);
router.get('/services', servicespageshow);
router.post('/result', resultpageshow);

module.exports = router;
