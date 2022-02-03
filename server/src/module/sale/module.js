const SaleController = require('./controller/saleController');
const SaleModel = require('./model/saleModel');
const SaleRepository = require('./repository/saleRepository');
const SaleService = require('./service/saleService');

/**
 *
 * @param {import('rsdi').container} container
 * @param {import('express').Application} app
 */

function initSaleModule(container, app) {
  const controller = container.get('SaleController');
  controller.configureRoutes(app);
}

module.exports = {
  initSaleModule,
  SaleController,
  SaleService,
  SaleModel,
  SaleRepository,
};
