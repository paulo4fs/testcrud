exports.seed = async (knex, Promise) => {
  // Deletes ALL existing entries
  return (
    knex('estoque')
      .del()
      // Inserts seed entries
      .then(() => {
        return knex('estoque').insert([
          {
            data_entrada: '2020/01/12 15:27:36',
            data_saida: null,
            id_produto: 1,
          },
          {
            data_entrada: '2020/01/12 15:27:36',
            data_saida: null,
            id_produto: 1,
          },
          {
            data_entrada: '2020/01/12 15:27:36',
            data_saida: null,
            id_produto: 1,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 2,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 2,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 3,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 3,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 3,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 4,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 5,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 5,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 6,
          },
          {
            data_entrada: '2020/01/13 15:27:36',
            data_saida: null,
            id_produto: 7,
          },
        ]);
      })
  );
};
