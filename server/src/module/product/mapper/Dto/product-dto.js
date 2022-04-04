module.exports = class ProductDto {
  constructor({
    id = null,
    descripcion,
    stock,
    precioCosto,
    precioModificador,

  }) {
    this.id = id;
    this.descripcion = descripcion;
    this.stock = stock;
    this.precioCosto = precioCosto;
    this.precioModificador = precioModificador;
  }
};
