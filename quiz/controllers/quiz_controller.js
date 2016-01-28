var Quiz = require('../models/quiz_model');

var quiz = new Quiz();

exports.index = function(req, res, next) {
  debug("en index.js: visitando '/'");
  res.render('index', { title: 'Quiz' });
};

// GET /quizes/question
exports.question = function(req, res) {
  var cq = quiz.randomQuestion();
  var current = cq.question;
  var index = cq.index;
  res.render('quizes/question', {pregunta: current.pregunta, index: index});
};

// GET /quizes/answer
exports.answer = function(req, res) {
  var c = 'Incorrecto';
  debug('req.query = '+req.query);
  debug('req.index = '+req.params.index);
  var cq = quiz.getQuestion(req.params.index);
  debug("cq.respuesta(req.query.respuesta) = "+cq.respuesta(req.query.respuesta));
  if (cq.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c})
};
