const Sale = require('../entity/saleEntity');

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

exports.fromPostToSaleEntity = ({
  id = null,
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
  parseFloat(ganancia),
  createdAt,
  updatedAt,
  deletedAt,
);
