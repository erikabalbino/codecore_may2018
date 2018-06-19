
exports.up = function(knex, Promise) {
    return knex.schema.createTable("tasks", table => {
        table.increments("id");
        table.text("body");
        table.timestamp("createdAt").default(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("tasks");
};
