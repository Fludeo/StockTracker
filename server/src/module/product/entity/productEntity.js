module.exports = class Product {
  /**
 *
 * @param {Number} id
 * @param {Text} descripcion
 * @param {Number} stock
 * @param {Number} precioCosto
 * @param {Number} precioModificador
 * @param {Date} createdAt
 *  @param {Date} updatedAt
 *  @param {Date} deletedAt
 */

  constructor(
    id, descripcion, stock, precioCosto, precioModificador, createdAt, updatedAt, deletedAt,
  ) {
    this.id = id;
    this.descripcion = descripcion;
    this.stock = stock;
    this.precioCosto = precioCosto;
    this.precioModificador = precioModificador;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  getFinalPrice() {
    const finalPrice = (this.precioCosto * ((this.precioModificador / 100) + 1.0));
    return finalPrice;
  }

  getCostPrice() {
    return this.precioCosto;
  }
};
