const knex = require('knex');

export async function up(knex) {
  return knex.schema.createTable('produto', (table) => {
    table.increments('idproduto').primary();
    table.string('nome', 50).notNullable();
    table.float('preco', 3).notNullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTable('produto');
}
