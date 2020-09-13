exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('produto')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('produto').insert([
        { nome: 'bola', preco: 50 },
        { nome: 'raquete', preco: 30 },
        { nome: 'chuteira', preco: 150 },
        { nome: 'camisa', preco: 45 },
        { nome: 'short', preco: 35 },
        { nome: 'meia', preco: 10 },
        { nome: 'óculos', preco: 150 },
      ]);
    });
};
