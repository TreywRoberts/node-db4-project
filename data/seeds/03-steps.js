
exports.seed = function(knex, Promise) {
      return knex('steps').insert([
        {step_number: 1, step_instructions: 'Get you some apples', recipe_id:1 },
        {step_number: 2, step_instructions: 'Cut up apples', recipe_id:1},
        {step_number: 3, step_instructions: 'Pull out pie crust', recipe_id:1},
        {step_number: 4, step_instructions: 'Put apple in crust', recipe_id:1},
        {step_number: 1, step_instructions: 'Pick up phone', recipe_id:2},
        {step_number: 2, step_instructions: 'Call Dominos', recipe_id:2},
        {step_number: 3, step_instructions: 'Wait for delivery', recipe_id:2}
      ]);
};
