module.exports = class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getById(id) {
    return this.productRepository.getById(id);
  }
};
