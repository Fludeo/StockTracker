const {
  default: DIContainer, object, get, factory,
} = require('rsdi');
const { Sequelize } = require('sequelize');
const session = require('express-session');
const {
  ProductController, ProductService, ProductModel, ProductRepository,
} = require('../module/product/module');

const {
  SaleController, SaleService, SaleModel, SaleRepository,
} = require('../module/sale/module');
const { DefaultController } = require('../module/default/module');
const ProductListModel = require('../module/product_list/model/productListModel');

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
function configureSaleModel(container) {
  return SaleModel.setup(container.get('sequelize'));
}
function configureProductListModel(container) {
  return ProductListModel.setup(container.get('sequelize'));
}

function addCommonDefinitions(container) {
  container.addDefinitions({
    sequelize: factory(databaseSetup),
    DefaultController: object(DefaultController).construct(get('ProductService')),
    ProductListModel: factory(configureProductListModel),
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
function addSaleDefinitions(container) {
  container.addDefinitions({
    SaleController: object(SaleController).construct(get('SaleService'), get('ProductService')),
    SaleService: object(SaleService).construct(get('SaleRepository'), get('ProductRepository')),
    SaleModel: factory(configureSaleModel),
    SaleRepository: object(SaleRepository).construct(get('SaleModel'), get('ProductModel')),
  });
}
/**
 * @returns {DIContainer}
 */
module.exports = function ConfigDIC() {
  const container = new DIContainer();
  addCommonDefinitions(container);
  addProductDefinitions(container);
  addSaleDefinitions(container);

  return container;
};
