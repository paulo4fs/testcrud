exports.up = async (knex) => {
  return knex.schema.createTable('estoque', (table) => {
    table.increments('idestoque').primary();
    table.dateTime('data_entrada').notNullable();
    table.dateTime('data_saida');
    //FOREIGN KEY
    table
      .integer('id_produto')
      .references('idproduto')
      .inTable('produto')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTable('estoque');
};
