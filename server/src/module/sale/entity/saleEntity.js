module.exports = class Sale {
  /**
   *
   * @param {Number} id
   * @param {Number} totalVenta
   * @param {Number} ganancia
   * @param {Array} listaProductos
   * @param {Date} createdAt
   * @param {Date} updatedAt
   * @param {Date} deletedAt
   */

  constructor(
    id, listaProductos, totalVenta, ganancia, createdAt, updatedAt, deletedAt,
  ) {
    this.id = id;
    this.listaProductos = listaProductos;
    this.totalVenta = totalVenta;
    this.ganancia = ganancia;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  precioDeCosto() {
    const costo = this.ganancia - this.totalVenta;
    return costo;
  }
};
