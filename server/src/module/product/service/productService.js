module.exports = class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getById(id) {
    return this.productRepository.getById(id);
  }

  async addStock(stockLoad) {
    await this.productRepository.addStock(stockLoad);
  }

  async getAllProducts() {
    const data = await this.productRepository.getAllProducts();

    return data;
  }
};
