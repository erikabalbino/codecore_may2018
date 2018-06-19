const express = require('express');
const knex = require("../db/index");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("welcome");
});

// CRUD for NOTE

// Notes#new
// GET /notes/new => just to show the form from view posts/new.ejs
router.get("/notes/new", (req, res) => {
  res.render("notes/new"); // => the view path
});

router.post("/notes", (req, res) => {
  knex
    .insert({
        title: req.body.title,
        body: req.body.description,
    })
    .into("notes")
    .returning("*")
    .then(([note]) => {
        console.log("Notes insert result:", note);
        // res.redirect("/notes");
        res.redirect(`/notes/${note.id}`);
        // res.send(note);
  });
    
    // res.send(req.body)
})

//Posts#show
// GET /notes/:id
router.get("/notes/:id", (req, res) => {

  // https://knexjs.org/#Builder-select
  knex
      .select("*")
      .from("notes")
      .where({ id: req.params.id }) 
      .then(results => {
      const [note] = results;

      // res.send(note);
      res.render("notes/show", { note: note });
      });
});

//Notes#index
// GET /notes
router.get("/notes", (req, res) => {
  knex
  .select("*")
  .from("notes")
  .orderBy("createdAt", "desc")
  .then(notes => {
      res.render("notes/index", { allNotes: notes });
      // res.send(notes);
  });
});

//Tasks#index
router.get("/index", (req, res) => {
  // res.send("new task view");
  knex
  .select("*")
  .from("tasks")
  .orderBy("createdAt", "desc")
  .then(tasks => {
      res.render("tasks/index", { allTasks: tasks });
      // res.send(notes);
  });
  // res.render("tasks/index"); // => the view path or name
});

router.post("/tasks", (req, res) => {
  knex
    .insert({
        body: req.body.description,
    })
    .into("tasks")
    .returning("*")
    .then(([tasks]) => {
        console.log("Notes insert result:", tasks);
        res.redirect(`/index`);
        // res.send(tasks);
  });
    // res.send(req.body)
})

  

module.exports = router;
