const express = require("express");
const multer = require("multer");
const path = require("path");

// Create 'uploads' directory if not exists
const fs = require("fs");
const dir = "./posts";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "posts");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
