const ProductController = require('./controller/productController');
const ProductModel = require('./model/productModel');
const ProductRepository = require('./repository/productRepository');
const ProductService = require('./service/productService');

/**
 *
 * @param {import('rsdi').container} container
 * @param {import('express').Application} app
 */

function initProductModule(container, app) {
  const controller = container.get('ProductController');
  controller.configureRoutes(app);
}

module.exports = {
  initProductModule,
  ProductController,
  ProductService,
  ProductModel,
  ProductRepository,
};
