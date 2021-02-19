
exports.up = function(knex) {
    knex.schema.createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('name', 128)
    })
    knex.schema.createTable('ingredients', table => {
        table.increments('ingredient_id').inTable('recipes')
        table.string('ingredient').inTable('recipes')
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
};
