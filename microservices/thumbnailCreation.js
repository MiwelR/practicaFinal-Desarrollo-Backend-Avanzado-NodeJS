"use strict";

const sharp = require("sharp");
const { Responder } = require("cote");

// declarar el microservicio
const responder = new Responder({ name: "thumbnail-creation" });

responder.on("thumbnail-convert", async (req, done) => {
  const { foto } = req;
  const fotoRoute = `../public/images/${foto}`;

  sharp(fotoRoute)
    .resize(100, 100)
    .toFile(
      "../public/images/thumbnails/" + "thumbnail-" + `${foto}`,
      (err, resizeImage) => {
        if (err) {
          console.log(err);
        } else {
          console.log(resizeImage);
        }
      }
    );

  const result = "thumbnail-creation";
  await done(result);
});
