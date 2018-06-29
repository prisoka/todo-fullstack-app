
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      const todos = [{
        title: 'Build a CRUD App',
        priority: 1,
        date: new Date()
      }, {
        title: 'Learn Heroku',
        priority: 1,
        date: new Date()
      }, {
        title: 'Learn Authentication and Authorization',
        priority: 1,
        date: new Date()
      }, {
        title: 'Rest',
        priority: 5,
        date: new Date()
      }];

      return knex('todo').insert(todos); // DONT forget to return!!!
    });
};
