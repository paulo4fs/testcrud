exports.up = async (knex) => {
  return knex.schema.createTable('produto', (table) => {
    table.increments('idproduto').primary();
    table.string('nome', 50).notNullable();
    table.float('preco').notNullable();
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTable('produto');
};