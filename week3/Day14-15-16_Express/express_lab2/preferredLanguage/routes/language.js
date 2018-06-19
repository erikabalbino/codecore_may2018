const express = require('express');
const router = express.Router();


/* GET Language Selection Page. */
router.get('/', function(req, res, next) {
  res.render('language');
});


const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // uma semana
router.post("/", (req, res) => {
    const name = req.body.name;
    const lang = req.body.lang;

    res.cookie('name', name, {maxAge: COOKIE_MAX_AGE});
    res.cookie('lang', lang, {maxAge: COOKIE_MAX_AGE});

    // res.send(req.body);
    res.redirect("/");
});

module.exports = router;
