exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments().primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.string("company").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
