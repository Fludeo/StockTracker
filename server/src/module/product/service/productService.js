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

  async addStockProduct(product) {
    const dbProduct = await this.productRepository.getById(product.id);
    dbProduct.stock += product.stock;
    await this.productRepository.updateProduct(dbProduct);
  }

  async updateProduct(product) {
    const dbProduct = await this.productRepository.getById(product.id);
    if (product.precioCosto !== 0)dbProduct.precioCosto = product.precioCosto;
    if (product.precioModificador !== 0)dbProduct.precioModificador = product.precioModificador;
    await this.productRepository.updateProduct(dbProduct);
  }

  async deleteProduct(product) {
    await this.productRepository.deleteProduct(product);
  }

  async addProduct(product) {
    await this.productRepository.addProduct(product);
  }
};
