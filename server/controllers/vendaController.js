const db = require('../database/connection');

exports.getAll = async (request, response) => {
  const data = await db('venda');
  return response.json({
    total: data.length,
    data,
  });
};

exports.getOne = async (request, response) => {
  const idvenda = request.params.id;
  const data = await db('venda').where('idvenda', idvenda);

  const items = await db('itemVenda')
    .select('estoque.idestoque', 'produto.idproduto', 'produto.preco')
    .where('id_venda', idvenda)
    .join('estoque', 'itemVenda.id_estoque', 'estoque.idestoque')
    .join('produto', 'estoque.id_produto', 'produto.idproduto');

  const totalPrice = items.reduce((acc, curr) => acc + curr.preco, 0);

  return response.json({
    data,
    total_items: items.length,
    items,
    total_price: totalPrice,
  });
};

exports.createOne = async (request, response) => {
  const idestoque = request.body;

  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  const dateLocal = new Date(now.getTime() - offsetMs);
  const str = dateLocal
    .toISOString()
    .slice(0, 19)
    .replace(/-/g, '/')
    .replace('T', ' ');

  console.log(idestoque, str);

  const idvenda = await db('venda').insert({
    data_saida: str,
  });

  console.log(idvenda);

  const id_venda = idestoque.map(async (element) => {
    await db('estoque')
      .where('idestoque', element.idestoque)
      .update({ data_saida: str });
    return await db('itemVenda').insert({
      id_venda: idvenda,
      id_estoque: element.idestoque,
    });
  });

  console.log(id_venda);

  return response.status(201).send();
};

exports.updateOne = async (request, response) => {
  const idproduto = request.params.id;
  const { nome, preco } = request.body;

  const data = await db('produto')
    .where('idproduto', idproduto)
    .update({ nome, preco });

  return response.status(200).json({
    status: 'success',
    data: {
      idproduto,
      nome,
      preco,
    },
  });
};

exports.deleteOne = async (request, response) => {
  const idvenda = request.params.id;

  console.log(idvenda);
  await db('venda').where('idvenda', idvenda);

  return response.status(204).json({
    status: 'success',
    data: null,
  });
};
