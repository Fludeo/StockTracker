module.exports = class SaleService {
  constructor(saleRepository) {
    this.saleRepository = saleRepository;
  }

  async getById(id) {
    return this.saleRepository.getById(id);
  }

  async getAllSales() {
    const data = await this.saleRepository.getAllSales();

    return data;
  }

  async deleteSale(sale) {
    await this.saleRepository.deleteProduct(sale);
  }

  async addSale(sale) {
    this.console.log('IMPRIMIENDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
    console.log(JSON.stringify(sale));
    // await this.saleRepository.addSale(sale);
  }
};
