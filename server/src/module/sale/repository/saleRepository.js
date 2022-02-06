const FailToSaveSaleError = require('../error/FailToSaveSaleError');

const { fromSaleModelToEntity } = require('../mapper/saleMapper');

module.exports = class SaleRepository {
  /**
   *
   * @param {typeof import('../model/saleModel')} saleModel
   */
  constructor(saleModel, productModel) {
    this.saleModel = saleModel;
    this.productModel = productModel;
  }

  /**
   *
   * @param {typeof import('../entity/saleEntity')} sale
   */
  async addNewSale(sale, t) {
    try {
      const newSale = await this.saleModel.create({
        ganancia: sale.ganancia,
        totalVenta: sale.totalVenta,
      }, { isNewRecord: true }, { transaction: t });
      const loop = await sale.listaProductos.map(async (item) => {
        const product = await this.productModel.findByPk(item.itemId);

        await newSale.addProduct(product, {
          through: {
            quantity: item.quantity,
            subTotal: item.subTotal,
          },
        }, { transaction: t });
        await Promise.all(loop);
      });
    } catch (err) {
      throw new FailToSaveSaleError('No se pudo guardar registro de Venta');
    }
  }

  async deleteSale(sale) {
    await this.saleModel.destroy({ where: { id: Number(sale.id) } });
  }

  async getById(saleId) {
    const saleInstance = await this.saleModel.findByPk(saleId);

    return fromSaleModelToEntity(saleInstance);
  }

  async getAllSales() {
    const allSales = await this.saleModel.findAll({ include: { model: this.productModel } });

    return allSales.map((sale) => fromSaleModelToEntity(
      { ...sale, listaProductos: sale.Products },
    ));
  }
};
