"use strict";

require("dotenv").config();

const mongoose = require("mongoose");
const readline = require("readline");

// Conexión con la Base de Datos
const dbConnection = require("./lib/connectMongoose");

// Modelo de Anuncios y Usuarios
const { Anuncio, Usuario } = require("./models");
const anuncioData = require("./anuncios.json");

main().catch((err) => console.log("Hubo un error: ", err));

async function main() {
  await new Promise((resolve, reject) => {
    dbConnection.once("open", resolve);
    dbConnection.once("error", reject);
  });

  if (
    !(await askYesNo("Estas seguro que quieres inicializar la BD? (yes/no)"))
  ) {
    console.log("Abortado el comando. No se ha borrado nada.");
    return process.exit(0);
  }

  // inicializo la colección de anuncios
  await initAnuncios();

  // inicializo la colección de usuarios
  await initUsuarios();

  dbConnection.close();
}

async function initAnuncios() {
  // Eliminar todos los anuncios existentes
  const deleted = await Anuncio.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} anuncios.`);

  // Crear anuncios por defecto
  const anuncios = await Anuncio.insertMany(anuncioData.anuncios);
  console.log(`Creados ${anuncios.length} anuncios.`);
}

async function initUsuarios() {
  // Eliminar todos los usuarios existentes
  const { deletedCount } = await Usuario.deleteMany();
  console.log(`Eliminados ${deletedCount} usuarios.`);

  // Crear usuarios por defecto
  const result = await Usuario.insertMany([
    {
      email: "admin@example.com",
      password: await Usuario.hashPassword("1234"),
    },
    {
      email: "user@example.com",
      password: await Usuario.hashPassword("1234"),
    },
  ]);
  console.log(`Insertados ${result.length} usuarios.`);
}

function askYesNo(questionText) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(questionText, (answer) => {
      rl.close();
      if (answer.toLowerCase() === "yes") {
        resolve(true);
        return;
      }
      resolve(false);
    });
  });
}
