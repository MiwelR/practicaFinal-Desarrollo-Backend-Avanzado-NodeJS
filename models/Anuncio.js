"use strict";

const mongoose = require("mongoose");

// Definición del esquema
const anuncioSchema = mongoose.Schema(
  {
    nombre: { type: String, index: true },
    precio: Number,
    venta: Boolean,
    foto: String,
    tags: [String],
  },
  {
    collection: "anuncios",
  }
);

anuncioSchema.statics.lista = function (filtro, limit, skip, fields, sort) {
  const query = Anuncio.find(filtro);
  query.limit(limit);
  query.skip(skip);
  query.select(fields);
  query.sort(sort);
  return query.exec();
};

// creamos el modelo con el esquema definido
const Anuncio = mongoose.model("Anuncio", anuncioSchema);

// exportamos el modelo
module.exports = Anuncio;
