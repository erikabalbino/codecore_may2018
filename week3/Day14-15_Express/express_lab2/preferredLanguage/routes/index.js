const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const name = req.cookies.name;
  const lang = req.cookies.lang;

  let greeting;
  if (name && lang) {
    switch(lang){
      case 'english':
        greeting = `Hello, ${name}`;
        break;
      case 'french':
        greeting = `Bonjour, ${name}`;
        break;
      case 'spanish':
        greeting = `Hola, ${name}`;
        break;
    }
  }

  res.render('index', {bla: greeting});
});


module.exports = router;
