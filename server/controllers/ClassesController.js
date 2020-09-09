// import { Request, Response } from 'express';

const db = require('../database/connection');
const { response, request } = require('express');

exports.index = async (request, response) => {
  const filters = request.query;
  if (!filters.subject || !filters.time) {
    return response.status(400).json({
      error: 'Missing filters to search classes',
    });
  }
};
