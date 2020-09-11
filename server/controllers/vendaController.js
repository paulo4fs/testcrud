const db = require('../database/connection');
exports.getAll = async (request, response) => {
  // const totalConnections = await db('produto').count('* as total');
  // const { total } = totalConnections[0];
  // return response.json();

  const data = await db('venda');
  return response.json({
    total: data.length,
    data,
  });
};

exports.createOne = async (request, response) => {
  const { nome, preco } = request.body;

  await db('venda').insert({
    nome,
    preco,
  });

  return response.status(201).send();
};
