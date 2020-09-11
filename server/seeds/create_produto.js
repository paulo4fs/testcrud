const knex = require('knex');

exports.up = async (knex) => {
  await knex('produto').insert([
    {
      name: 'bola',
      preco: 50,
    },
  ]);
};
