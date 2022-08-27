const path = require('path');
const url = require('url');

const homepageshow = (req, res) => {
  res.render('index');
};
const aboutpageshow = (req, res) => {
  res.render('about');
};
const contactpageshow = (req, res) => {
  res.render('contact');
};
const servicespageshow = (req, res) => {
  res.render('services');
};
const resultpageshow = (req, res) => {
  res.json(req.body);
};

// export

module.exports = {
  homepageshow,
  aboutpageshow,
  contactpageshow,
  servicespageshow,
  resultpageshow,
};
