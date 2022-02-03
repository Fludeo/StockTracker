module.exports = class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getById(id) {
    return this.productRepository.getById(id);
  }

  async getAllProducts() {
    const data = await this.productRepository.getAllProducts();

    return data;
  }

  async updateProduct(product) {
    await this.productRepository.updateProduct(product);
  }

  async deleteProduct(product) {
    await this.productRepository.deleteProduct(product);
  }

  async addProduct(product) {
    await this.productRepository.addProduct(product);
  }
};
