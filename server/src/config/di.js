const {
  default: DIContainer, object, get, factory,
} = require('rsdi');
const Database = require('better-sqlite3');

const { ProductService, ProductRepository } = require('../module/product/module');

function databaseSetUp() {
  const databaseConection = new Database(process.env.DATABASE_PATH);
  return databaseConection;
}

function addCommonDefinitions(container) {
  container.addDefinition({
    sqliteDatabase: factory(databaseSetUp),
  });
}

function addProductDefinitions(container) {
  container.addDefinition({
    ProductService: object(ProductService).construct(get('ProductRepository')),
    ProductRepository: object(ProductRepository).get('sqliteDatabase'),
  });
}

/**
 * @returns {DIContainer}
 */
module.exports = function ConfigureDI() {
  const container = new DIContainer();
  addCommonDefinitions(container);
  addProductDefinitions(container);
  return container;
};
