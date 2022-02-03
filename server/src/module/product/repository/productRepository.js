const { fromProductModelToEntity } = require('../mapper/productMapper');

module.exports = class ProductRepository {
  /**
   *
   * @param {typeof import('../model/productModel')} productModel
   */
  constructor(productModel) {
    this.productModel = productModel;
  }

  async updateProduct(product) {
    const productInstance = await this.productModel.findByPk(product.id);
    if (product.stock !== '') { productInstance.stock = Number(productInstance.stock) + Number(product.stock); }
    if (product.descripcion !== '') { productInstance.descripcion = product.descripcion; }
    if (product.precio !== '') { productInstance.precioCosto = Number(product.precio); }
    if (product.modificador !== '') { productInstance.precioModificador = Number(product.modificador); }

    await productInstance.save();
  }

  async addProduct(product) {
    const newProduct = await this.productModel.build({
      descripcion: product.descripcion,
      precioCosto: Number(product.precio),
    });

    await newProduct.save();
  }

  async deleteProduct(product) {
    await this.productModel.destroy({ where: { id: Number(product.id) } });
  }

  async getById(productId) {
    const productInstance = await this.productModel.findByPk(productId);

    return fromProductModelToEntity(productInstance);
  }

  async getAllProducts() {
    const allProducts = await this.productModel.findAll();

    return allProducts.map((product) => fromProductModelToEntity(product));
  }
};
