
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'patty'},
        {ingredient: 'cheese'},
        {ingredient: 'milk'}
      ]);
    });
};
