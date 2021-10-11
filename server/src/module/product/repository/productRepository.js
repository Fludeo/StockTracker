const { fromProductModelToEntity } = require('../mapper/productMapper');

module.exports = class ProductRepository {
  /**
   *
   * @param {typeof import('../model/productModel')} productModel
   */
  constructor(productModel) {
    this.productModel = productModel;
  }

  async loadStock(product) {
    const productInstance = await this.productModel.findByPk(product.id);
    productInstance.stock = product.stock;
    await productInstance.save();
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
