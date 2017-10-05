exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments().primary();
    table.timestamps();
    table.string('name');
    table.string('auth0_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
