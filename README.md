# STW-7
Siguiendo las instrucciones en el Módulo VI: El proyecto Quiz y MVC construya paso a paso la aplicación del cuestionario, utilizando  Favicon, Layouts, Controladores y Modelos


## El proyecto Quiz y MVC URL
https://campusvirtual.ull.es/1516/mod/url/view.php?id=105044

## Transparencias de "El Proyecto Quiz y MVC" Archivo
https://campusvirtual.ull.es/1516/pluginfile.php/161441/mod_resource/content/3/transp_modulo6.pdf

## Commands & Utilities
#### express generator instalation

    $ npm install express-generator

  For global installation use the -g option

    $ npm install express-generator -g

  For a specific version installation, in the previous case the latest version is installed.

    $ npm install express-generator@4.9.0

#### Express basic structure	genera

    $ node_modules/express-generator/bin/express

  For global installation (-g)

    $ express --ejs quiz

#### install dependencies:

    $ cd quiz
    $ npm install

#### run the app:

    $ SET DEBUG=quiz:*
    $ npm start

## Layout & partial

### Install the package express-partials
#### última versión estable

   $ npm install --save express-partials

#### versión del proyecto

    $ npm install --save express-partials@0.3.0

### Importar/instalar MW 	express-partials en app.js
#### añadir las linas	 

 `var partials = require('express-partials');`
 `app.use(partials());`

### Añadir	marco único (views/layout.ejs) con las marcas HTML5
  `<header>`
  `<nav>`
  `<section> body changes for each view`
  `<footer>`

 - nota : The view layout.ejs has common code as template, only the body code
in <section > which changes for each view, the others views have only
their own code of body.
