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

router
  .route('/produto/:id')
  .patch(produtoController.updateOne)
  .delete(produtoController.deleteOne);

router
  .route('/venda')
  .get(vendaController.getAll)
  .post(vendaController.createOne);

router
  .route('/venda/:id')
  .get(vendaController.getOne)
  .patch(vendaController.updateOne)
  .delete(vendaController.deleteOne);

router.route('/estoque/:id').delete(estoqueController.deleteOne);

router.route('/estoque/allof/:id').delete(estoqueController.deleteAllOf);

module.exports = router;
