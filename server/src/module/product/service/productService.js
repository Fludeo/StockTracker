module.exports = class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getById(id) {
    return this.productRepository.getById(id);
  }

  async loadStock(stockLoad) {
    stockLoad.map((product) => this.productRepository.loadStock(product));
  }

  async getAllProducts() {
    const data = await this.productRepository.getAllProducts();

    return data;
  }
};
