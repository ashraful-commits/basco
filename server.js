const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const url = require('url');
const pageRouter = require('./routes/pagerouters');
const expressLayouts = require('express-ejs-layouts');

// dotenv config
dotenv.config();

const port = process.env.PORT || 1200;

// express init
const app = express();

// app used
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ejs init
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/app');

app.use(express.static('public'));
// public static

app.use(pageRouter);

// sever careateing
app.listen(port, () => {
  console.log(`server is running port ${port}`.bgMagenta);
});
