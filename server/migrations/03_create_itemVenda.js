exports.up = async (knex) => {
  return knex.schema.createTable('itemvenda', (table) => {
    table
      .integer('id_venda')
      .notNullable()
      .references('idvenda')
      .inTable('venda')
      .onDelete('CASCADE')

    table
      .integer('id_estoque')
      .notNullable()
      .references('idestoque')
      .inTable('estoque')
      .onDelete('CASCADE')
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTable('itemvenda');
};
