var express = require('express');
var router = express.Router();

//require knex:
let knex = require('../db/knex');

// get all todos
router.get('/', function(req, res, next) {
  // the client req all
  // the server get all from db
  knex('todo')
  .then((data) => {
    // console.log('data', data);
  // response all & if not found, send empty arr
    res.status(200).send(data); // 200 = ok
  })
  .catch((err) => {
    console.log('err', err);
    res.status(500).send({error: {message: 'Something went wrong!'}}) // if can't find the req
  })
});

// get one todo
router.get('/:id', function(req, res, next) {
  // the client req one single todo
  const id = req.params.id;
  // the server gets the given id and search for sgl item n DB
  knex('todo')
  .where('id', id) // 'id' --> table column
  .then((data) => {
    // if found, response data
    if(data.length > 0){
      res.status(200).send(data[0]) // [0] --> calls just (expected) SINGLE item, not whole array
    } else {
      res.status(404).send({error: {message: 'Not Found!'}})
    }
  })
  .catch((err) => {
    console.log('err', err);
    // if not found: 404
    res.status(500).send({error: {message: 'Something went wrong!'}}) // if can't find the req
  })
});


// id
// title - text (NN)
// priority - integer
// description - text
// done - boolean
// date - date time

// create one
router.post('/', function(req, res, next) {
  // client req a new
  // authorization (could actually be in any/all router)
  // server collects information
  const newTodo = {
      title: req.body.title,
      priority: req.body.priority,
      date: new Date()
  }
  // server validates (ie, checks schema, formats, ranges...) <NOT NOW!!!>
  // if info not good server send 400 - Bad Req <NOT NOW!!!>
  // if all good, server send information to DB
  knex('todo')
  .insert(newTodo)
  .then((id) => {
    // if created, server response with 202
    res.status(202).send({ message: 'Created!' })
  })
  // if not able to be stored in DB server send 500 - Internal Server Error
  .catch((err) => {
    res.status(500).send({error: {message: 'Something went wrong!'}});
  })
});

// update one todo
router.put('/:id', function(req, res, next) {
  // client req one item to update
  // server validates client information
  // if input ok, server gets id for the new input
  // server checks if id exists in the db
  // server gets id from db

});

// delete one todo
router.delete('/:id', function(req, res, next) {
  // client req to delete one todo
  // server validate given ID
  const id = req.params.id;
  // if id found server deletes and response success
  knex('todo')
  .where('id', id)
  .del()
  .then(() => {
    console.log('deleted');
    res.status(200).send();
  })
  // if id not found server response 404 not found
  // if db fails server response 500
  .catch((err) => {
    console.log(err)
    res.status(500).send({error: {message: 'Something went wrong!'}});
  })
});

module.exports = router;
