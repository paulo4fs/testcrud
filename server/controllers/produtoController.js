const db = require('../database/connection');

exports.getAll = async (request, response) => {
  const data = await db('produto');
  return response.json({
    total: data.length,
    data,
  });
};

exports.createOne = async (request, response) => {
  const { nome, preco } = request.body;

  const idproduto = await db('produto').insert({
    nome,
    preco,
  });

  return response.status(200).json({
    status: 'success',
    data: {
      idproduto: idproduto[0],
      nome,
      preco,
    },
  });
};

exports.updateOne = async (request, response) => {

  
  const idproduto = await db('produto').insert({
    nome,
    preco,
  });

  return response.status(200).json({
    status: 'success',
    data: {
      idproduto: idproduto[0],
      nome,
      preco,
    },
  });
};

exports.deleteOne = async (request, response) => {
  const idproduto = request.params.id;

  console.log(idproduto);
  await db('produto').where('idproduto', idproduto).del();

  return response.status(204).json({
    status: 'success',
    data: null,
  });
};
