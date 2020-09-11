const express = require('express');

const vendaController = require('./controllers/vendaController');
const estoqueController = require('./controllers/estoqueController');
const produtoController = require('./controllers/produtoController');
const router = express.Router();

router
  .route('/estoque')
  .get(estoqueController.getAll)
  .post(estoqueController.createOne);

router.route('/estoque/:id').delete(estoqueController.deleteOne);

router
  .route('/produto')
  .get(produtoController.getAll)
  .post(produtoController.createOne);

router.route('/produto/:id').delete(produtoController.deleteOne);

router
  .route('/venda')
  .get(vendaController.getAll)
  .post(vendaController.createOne);

module.exports = router;
