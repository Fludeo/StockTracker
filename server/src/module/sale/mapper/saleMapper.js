const Sale = require('../entity/saleEntity');

exports.fromSaleModelToEntity = ({
  id,
  listaProductos,
  totalVenta,
  createdAt = null,
  updatedAt = null,
  deletedAt = null,

}) => new Sale(
  Number(id),
  listaProductos,
  parseFloat(totalVenta),
  createdAt,
  updatedAt,
  deletedAt,
);
