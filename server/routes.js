const express = require('express');

const vendaController = require('./controllers/vendaController');
const estoqueController = require('./controllers/estoqueController');
const produtoController = require('./controllers/produtoController');
const router = express.Router();

router
  .route('/estoque')
  .get(estoqueController.getAll)
  .post(estoqueController.createOne);

router.route('/estoque/allnotsold').get(estoqueController.allNotSold);

router.route('/estoque/allsold').get(estoqueController.allSold);

router.route('/estoque/:id').delete(estoqueController.deleteOne);

router.route('/estoque/allof/:id').delete(estoqueController.deleteAllOf);

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

router.route('/venda/:id').get(vendaController.getOne);

module.exports = router;
