const db = require('../database/connection');

exports.getAll = async (request, response) => {
  const data = await db('estoque');
  return response.json({
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

  return response.status(200).json({
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
