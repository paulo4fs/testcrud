exports.up = async (knex) => {
  return knex.schema.createTable('venda', (table) => {
    table.increments('idvenda').primary();
    table.dateTime('data_saida');
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTable('venda');
};