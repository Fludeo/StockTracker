const FailToUpdateProductError = require('../error/FailToUpdateProduct');
const { fromProductModelToEntity } = require('../mapper/productMapper');

module.exports = class ProductRepository {
  /**
   *
   * @param {typeof import('../model/productModel')} productModel
   */
  constructor(productModel) {
    this.productModel = productModel;
  }

  async updateProduct(product, t) {
    try {
      const productInstance = await this.productModel.findByPk(product.id);

      await productInstance.update({
        stock: Number(product.stock),
        descripcion: product.descripcion,
        precioCosto: Number(product.precioCosto),
        precioModificador: Number(product.precioModificador),
      }, { transaction: t });
    } catch (err) {
      throw new FailToUpdateProductError(`No se pudo actualizar producto: ${product.descripcion}`);
    }
  }

  async addProduct(product) {
    await this.productModel.create({
      descripcion: product.descripcion,
      precioCosto: Number(product.precioCosto),
    }, { isNewRecord: true });
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
