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
  stock,
  parseFloat(precioCosto),
  parseFloat(precioModificador),
  createdAt,
  updatedAt,
  deletedAt,
);
