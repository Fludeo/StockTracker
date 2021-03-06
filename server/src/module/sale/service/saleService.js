const NoStockError = require('../error/NoStockError');

module.exports = class SaleService {
  constructor(saleRepository, productRepository) {
    this.saleRepository = saleRepository;
    this.productRepository = productRepository;
  }

  async getById(id) {
    return this.saleRepository.getById(id);
  }

  async getBetweenDatesSales(startDate, endDate) {
    const data = await this.saleRepository.getBetweenDatesSales(startDate, endDate);

    return data;
  }

  async getAllSales() {
    const data = await this.saleRepository.getAllSales();
    return data;
  }

  async deleteSale(sale) {
    await this.saleRepository.deleteProduct(sale);
  }

  async addNewSale(sale) {
    const loop = await sale.listaProductos.map(async (item) => {
      if (item.product.stock < item.quantity) {
        throw new NoStockError(`No hay suficiente stock de ${item.descipcion}`);
      }

      const product = await this.productRepository.getById(item.product.id);

      product.stock -= Number(item.quantity);

      await this.productRepository.updateProduct(product);
    });
    await Promise.all(loop);
    await this.saleRepository.addNewSale(sale);
  }
};
