"use strict ";

// const express = require("express");
// const fs = require("fs");
// const multer = require("multer");
// // const uuid = require('uuid');

// const storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//     cb(null, "./public/images/");
//   },

//   filename: (req, file, cb) => {
//     cb(null, file.originalname + path.extname(file.originalname));
//     console.log(file.originalname);
//   },
// });

const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    // cb(null, Date.now() + path.extname(file.originalname));
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = multer({ storage });
