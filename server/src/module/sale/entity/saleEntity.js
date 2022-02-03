module.exports = class Sale {
  /**
   *
   * @param {Number} id
   * @param {Number} totalVenta
   * @param {Array} listaProductos
   * @param {Date} createdAt
   * @param {Date} updatedAt
   * @param {Date} deletedAt
   */

  constructor(
    id, listaProductos, totalVenta, createdAt, updatedAt, deletedAt,
  ) {
    this.id = id;
    this.totalVenta = totalVenta;
    this.listaProductos = listaProductos;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
};
