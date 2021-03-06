const Product = require('../entity/productEntity');

exports.fromProductModelToEntity = ({
  id,
  descripcion,
  stock,
  precioCosto,
  precioModificador,
  createdAt = null,
  updatedAt = null,
  deletedAt = null,

}) => new Product(
  Number(id),
  descripcion,
  Number(stock),
  parseFloat(precioCosto),
  parseFloat(precioModificador),
  createdAt,
  updatedAt,
  deletedAt,
);

exports.fromDtoToProductEntity = ({
  id = null,
  descripcion,
  stock = 0,
  precioCosto = 0,
  precioModificador = 25,
  createdAt = null,
  updatedAt = null,
  deletedAt = null,

}) => new Product(
  Number(id),
  descripcion,
  Number(stock),
  parseFloat(precioCosto),
  parseFloat(precioModificador),
  createdAt,
  updatedAt,
  deletedAt,
);
