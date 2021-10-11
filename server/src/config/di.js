const {
  default: DIContainer, object, get, factory,
} = require('rsdi');
const { Sequelize } = require('sequelize');
const session = require('express-session');
const {
  ProductController, ProductService, ProductModel, ProductRepository,
} = require('../module/product/module');
const { DefaultController } = require('../module/default/module');

function databaseSetup() {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    dialectOptions: { decimalNumbers: true },
    storage: process.env.DATABASE_PATH,
  });
  return sequelize;
}

function configureProductModel(container) {
  return ProductModel.setup(container.get('sequelize'));
}

function addCommonDefinitions(container) {
  container.addDefinitions({
    sequelize: factory(databaseSetup),
    DefaultController: object(DefaultController).construct(get('ProductService')),
    Session: session,
  });
}

function addProductDefinitions(container) {
  container.addDefinitions({
    ProductController: object(ProductController).construct(get('ProductService')),
    ProductService: object(ProductService).construct(get('ProductRepository')),
    ProductModel: factory(configureProductModel),
    ProductRepository: object(ProductRepository).construct(get('ProductModel')),
  });
}
/**
 * @returns {DIContainer}
 */
module.exports = function ConfigDIC() {
  const container = new DIContainer();
  addCommonDefinitions(container);
  addProductDefinitions(container);

  return container;
};
