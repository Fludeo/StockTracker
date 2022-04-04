const Sale = require('../entity/saleEntity');
const fromDtoToProductList = require('../../product_list/mapper/product-list-mapper');

exports.fromSaleModelToEntity = ({
  id,
  listaProductos,
  totalVenta,
  ganancia,
  createdAt = null,
  updatedAt = null,
  deletedAt = null,

}) => new Sale(
  Number(id),
  listaProductos,
  parseFloat(totalVenta),
  ganancia,
  createdAt,
  updatedAt,
  deletedAt,
);

exports.fromDtoToSaleEntity = ({
  id = null,
  productList,
  saleTotal,
  totalEarn,
  createdAt = null,
  updatedAt = null,
  deletedAt = null,

}) => new Sale(
  Number(id),
  fromDtoToProductList(productList),
  parseFloat(saleTotal),
  parseFloat(totalEarn),
  createdAt,
  updatedAt,
  deletedAt,
);
