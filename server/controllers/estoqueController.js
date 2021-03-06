const db = require('../database/connection');

exports.getAll = async (request, response) => {
  const data = await db('estoque').innerJoin(
    'produto',
    'estoque.id_produto',
    'produto.idproduto'
  );

  return response.status(200).json({
    total: data.length,
    data,
  });
};

exports.allSold = async (request, response) => {
  const data = await db('estoque')
    .select(
      'estoque.idestoque',
      'estoque.data_entrada',
      'estoque.data_saida',
      'produto.idproduto',
      'produto.nome',
      'produto.preco'
    )
    .whereNotNull('data_saida')
    .innerJoin('produto', 'estoque.id_produto', 'produto.idproduto');

  return response.status(200).json({
    total: data.length,
    data,
  });
};

exports.allNotSold = async (request, response) => {
  const data = await db('estoque')
    .select(
      'estoque.idestoque',
      'estoque.data_entrada',
      'estoque.data_saida',
      'produto.idproduto',
      'produto.nome',
      'produto.preco'
    )
    .where('data_saida', null)
    .innerJoin('produto', 'estoque.id_produto', 'produto.idproduto');

  return response.status(200).json({
    total: data.length,
    data,
  });
};

exports.createOne = async (request, response) => {
  const { id_produto } = request.body;

  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  const dateLocal = new Date(now.getTime() - offsetMs);
  const str = dateLocal
    .toISOString()
    .slice(0, 19)
    .replace(/-/g, '/')
    .replace('T', ' ');

  const idestoque = await db('estoque').insert({
    id_produto,
    data_entrada: str,
  });

  return response.status(201).json({
    status: 'success',
    data: {
      idestoque: idestoque[0],
      data_entrada: str,
      id_produto,
    },
  });
};

exports.deleteOne = async (request, response) => {
  const idestoque = request.params.id;

  console.log(idestoque);
  await db('estoque').where('idestoque', idestoque).del();

  return response.status(204).json({
    status: 'success',
    data: null,
  });
};

exports.deleteAllOf = async (request, response) => {
  const id_produto = request.params.id;

  await db('estoque').where('id_produto', id_produto).del();

  return response.status(204).json({
    status: 'success',
    data: null,
  });
};
