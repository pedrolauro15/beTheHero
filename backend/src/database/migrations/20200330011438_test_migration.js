
exports.up = function(knex) {
  return knex.schema.createTable('test', table => {
    table.increments('id');
    table.string('user').notNullable();
    table.string('senha').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('test');
};
