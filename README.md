# Bootcamp Full Stack Web Developer #


## Práctica Final - Módulo: Desarrollo Backend Avanzado en NodeJS/MongoDB

### NodePop Backend

La práctica la he realizado sobre el código que creé para la práctica final de Backend con NodeJS/MongoDB (Pulsa el siguiente enlace para ver el repositorio):

[https://github.com/MiwelR/practicaFinal-Desarrollo-Backend-NodeJS-MongoDB](https://github.com/MiwelR/practicaFinal-Desarrollo-Backend-NodeJS-MongoDB "Enlace al repositorio de la práctica")

Índice de retos obligatorios e implementados en esta práctica:

1. Autenticación con JWT
2. Internacionalización (i18n)
3. Subida de imagen con tarea en background (realizada con microservicio usando Sharp)


## Instrucciones

### Instalar dependencias del proyecto:

En primer lugar, debemos usar el siguiente comando para instalar todas las dependencias del proyecto, desde 2 ubicaciones:

    npm install

Desde las rutas:

1. Carpeta raíz del proyecto
1. Carpeta "microservices" ubicada dentro de la raíz del proyecto


### Inicializar la base de datos:

Para inicializar la base de datos con los datos de ejemplo, se ha creado un Script que realizará todo este proceso. Para ello debe ejecutar el siguiente comando desde la raíz del proyecto:

    npm run install_bd

> Este proceso creará la base de datos con 2 anuncios y 2 usuarios de prueba:

> user@example.com - Contraseña: 1234 / admin@example.com - Contraseña: 1234


### Iniciar proyecto en modo desarrollo:

Para arrancar el proyecto en modo desarrollo se usará:

    npm run dev


### Iniciar microservicio:

Para iniciar el microservicio creado que se encargará de generar un thumbnail de la imagen de cada anuncio subido, se usará:

    nodemon thumbnailCreation.js

> Cada thumbnail generado se guardará en la carpeta "public/images/thumbnails"


### Nuevas rutas añadidas/modificadas del API:

**POST:**

Al hacer una petición "POST" a la siguiente ruta con usuario y contraseña, devuelve un TOKEN implementado con JWT para poder usar en la cabecera "Authorization" en el resto de peticiones:

> /apiv1/authenticate

Para poder crear anuncios usando la siguiente petición, añadir el TOKEN en la cabecera "Authorization":

> /apiv1/anuncios

No hay que olvidar que para realizar correctamente el envío del formulario en la petición habrá que usar "form-data" en el "Body" de la petición e incluir la key "foto" como tipo "file" y como value añadir la imagen que se quiera cargar.

**GET:**

Para poder mostrar los anuncios usando la siguiente petición, añadir el TOKEN en la cabecera "Authorization":

> /apiv1/anuncios




