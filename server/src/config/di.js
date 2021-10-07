const {
  default: DIContainer, object, get, factory,
} = require('rsdi');
const Database = require('better-sqlite3');
const session = require('express-session');
const { ProductController, ProductService, ProductRepository } = require('../module/product/module');
const { DefaultController } = require('../module/default/module');

function databaseSetUp() {
  const databaseConection = new Database(process.env.DATABASE_PATH);
  return databaseConection;
}

function addCommonDefinitions(container) {
  container.addDefinitions({
    sqliteDatabase: factory(databaseSetUp),
    DefaultController: object(DefaultController).construct(get('ProductService')),
    Session: session,
  });
}

function addProductDefinitions(container) {
  container.addDefinitions({
    ProductController: object(ProductController).construct(get('ProductService')),
    ProductService: object(ProductService).construct(get('ProductRepository')),
    ProductRepository: object(ProductRepository).construct(get('sqliteDatabase')),
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
