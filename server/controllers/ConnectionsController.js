const db = require('../database/connection');

exports.index = async (request, response) => {
  const totalConnections = await db('produto').count('* as total');

  const { total } = totalConnections[0];

  return response.json({ total });
};

exports.create = async (request, response) => {
   const { user_id } = request.body;

  await db('connections').insert({
    user_id,
  });

  return response.status(201).send();
};
