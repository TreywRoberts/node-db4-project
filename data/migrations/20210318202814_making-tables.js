
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tables =>{
        tables.increments('recipe_id')
        tables.string('recipe_name', 100).notNullable()
        tables.timestamp('created_at')
    })
   .createTable('ingredients', tables =>{
       tables.increments('ingredient_id')
       tables.string('ingredient_name').unique().notNullable()
    })
   .createTable('steps', tables =>{
       tables.increments('step_id')
       tables.integer('step_number').notNullable()
       tables.text('step_instructions', 150).notNullable()
       tables.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
   })
   .createTable('step_ingredients', tables =>{
       tables.increments('step_ingredient_id')
       tables.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
       tables.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
       tables.float('quantity')
   })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
