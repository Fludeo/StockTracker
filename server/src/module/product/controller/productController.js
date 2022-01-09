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
    const newProduct = req.body;

    await this.productService.addProduct(newProduct);

    res.sendStatus(200);
  }

  async deleteProduct(req, res) {
    const product = req.body;

    await this.productService.deleteProduct(product);

    res.sendStatus(200);
  }

  async updateProduct(req, res) {
    const product = req.body;
    await this.productService.updateProduct(product);

    res.sendStatus(200);
  }
};
