const { fromSaleModelToEntity } = require('../mapper/saleMapper');

module.exports = class SaleRepository {
  /**
   *
   * @param {typeof import('../model/saleModel')} saleModel
   */
  constructor(saleModel) {
    this.saleModel = saleModel;
  }

  /**
   *
   * @param {typeof import('../entity/saleEntity')} sale
   */
  async addSale(sale) {
    const newSale = await this.saleModel.build({
      totalVenta: sale.totalVenta,
    });

    await newSale.save();
  }

  async deleteSale(sale) {
    await this.saleModel.destroy({ where: { id: Number(sale.id) } });
  }

  async getById(saleId) {
    const saleInstance = await this.saleModel.findByPk(saleId);

    return fromSaleModelToEntity(saleInstance);
  }

  async getAllSales() {
    const allSales = await this.saleModel.findAll();

    return allSales.map((sale) => fromSaleModelToEntity(sale));
  }
};
