const { fromDtoToProductEntity } = require('../mapper/productMapper');
const ProductDto = require('../mapper/Dto/product-dto');

module.exports = class ProductController {
  constructor(productService) {
    this.productService = productService;
    this.BASE_ROUTE = '/product';
  }

  configureRoutes(app) {
    const BASEROUTE = this.BASE_ROUTE;
    app.get(`${BASEROUTE}/get/all`, this.getAllProducts.bind(this));
    app.get(`${BASEROUTE}/get/:id`, this.getProductById.bind(this));
    app.post(`${BASEROUTE}/addproduct`, this.addProduct.bind(this));
    app.post(`${BASEROUTE}/deleteproduct`, this.deleteProduct.bind(this));
    app.post(`${BASEROUTE}/updateproduct`, this.updateProduct.bind(this));
    app.post(`${BASEROUTE}/updateproduct/price`, this.updateProductPrice.bind(this));
    app.post(`${BASEROUTE}/updateproduct/priceMod`, this.updateProductPriceModifier.bind(this));
    app.post(`${BASEROUTE}/addstockproduct`, this.addStockProduct.bind(this));
  }

  /**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

  async getProductById(req, res) {
    const product = await this.productService.getById(req.params.id);
    res.json(product);
  }

  /**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
  async getAllProducts(req, res) {
    const allProducts = await this.productService.getAllProducts();

    res.json(allProducts);
  }

  /**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

  async addProduct(req, res) {
    const product = new ProductDto(req.body);

    const newProduct = fromDtoToProductEntity(product);
    await this.productService.addProduct(newProduct);

    res.sendStatus(200);
  }

  async updateProduct(req, res) {
    const product = new ProductDto(req.body);
    const productEntity = fromDtoToProductEntity(product);
    try {
      await this.productService.updateProduct(productEntity);
      res.sendStatus(200);
    } catch (err) {
      res.status(500);
      res.json({ error: err });
    }
  }

  async updateProductPrice(req, res) {
    const product = new ProductDto(req.body);
    const productEntity = fromDtoToProductEntity(product);
    try {
      await this.productService.updateProductPrice(productEntity);
      res.sendStatus(200);
    } catch (err) {
      res.status(500);
      res.json({ error: err });
    }
  }

  async updateProductPriceModifier(req, res) {
    const product = new ProductDto(req.body);
    const productEntity = fromDtoToProductEntity(product);
    console.log(productEntity);
    try {
      await this.productService.updateProductPriceModifier(productEntity);
      res.sendStatus(200);
    } catch (err) {
      res.status(500);
      res.json({ error: err });
    }
  }

  async deleteProduct(req, res) {
    const product = new ProductDto(req.body);

    await this.productService.deleteProduct(product);

    res.sendStatus(200);
  }

  async addStockProduct(req, res) {
    const product = new ProductDto(req.body);
    const productEntity = fromDtoToProductEntity(product);
    await this.productService.addStockProduct(productEntity);

    res.sendStatus(200);
  }
};
