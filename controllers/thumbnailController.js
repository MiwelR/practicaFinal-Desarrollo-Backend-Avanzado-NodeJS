"use strict";

const { Requester } = require("cote");

const requester = new Requester({ name: "nodepop-thumbnail-controller" });

const thumbnailController = (foto) => {
  const req = {
    type: "thumbnail-convert",
    foto: foto,
  };
  requester.send(req, (done) => {
    console.log(`transform ${foto} = ${req} ${done}`);
  });
};

module.exports = thumbnailController;
