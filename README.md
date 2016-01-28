# STW-7
Siguiendo las instrucciones en el Módulo VI: El proyecto Quiz y MVC construya paso a paso la aplicación del cuestionario, utilizando  Favicon, Layouts, Controladores y Modelos

## Material
### Video tutorial "El proyecto Quiz y MVC"
https://campusvirtual.ull.es/1516/mod/url/view.php?id=105044

### PDF document : "El Proyecto Quiz y MVC"
https://campusvirtual.ull.es/1516/pluginfile.php/161441/mod_resource/content/3/transp_modulo6.pdf

## Commands & Utilities
#### express generator instalation

    $ npm install express-generator

  For global installation use the -g option

    $ npm install express-generator -g

  For a specific version installation, in the previous case the latest version is installed.

    $ npm install express-generator@4.9.0

#### Express basic structure generation

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
#### For last version

   $ npm install --save express-partials

#### For this proyect version

    $ npm install --save express-partials@0.3.0

### Import/install MW	express-partials in app.js
#### add lines in app.js

 `var partials = require('express-partials');`

 `app.use(partials());`

### add	template layout (views/layout.ejs)
  `<header>`
  `<nav>`
  `<section> here set body changes for each view`
  `<footer>`

 - note : The view layout.ejs has common code as template, only the body code.
in <section > which will be changed for each view, the others views have only
their own code of body.

## Multiple questions
### The Model based on a JavaScript class. No database

#### Model
 - The directory models is added
 this dir is downloaded from this rep : https://github.com/SYTW/basic-quiz by Casiano Rodriguez-Leon crguezl.
  See the files  `quiz_model.js` y `abstract_quiz_model.js` in the Directory `models`
 - Model based on a JavaScript class. No database
#### Quiz controller
- Adapting the controller functions of `quiz_controller.js` exports.question and exports.answer that previously served only one question and its answer and now serves multiple questions stored in the data model `quiz_model.js`.

  See the file  `quiz_controller.js` in the Directory `controllers`

#### routes:

Also had to modify the route /quizes/answer to redirect it to `quizController.answer` function the controller `quiz_controller.js` for a specific answer to a specific question indicated by `/:index`.

  `router.get('/quizes/answer/:index',   quizController.answer);`

  See the file  `index.js` in the Directory `routes`

so we changed the action where to send the question

    `<form method="get" action="/quizes/answer/<%= index %>">`

  See the file  `question.ejs` in the Directory `views\quizes\`
