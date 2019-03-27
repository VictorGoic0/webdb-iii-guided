// what new changes we need to make
exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", tbl => {
    // primary key. Call it ID, autoincrement.
    tbl.increments();

    tbl
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

// how to undo the changes made in the up function
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles");
};
