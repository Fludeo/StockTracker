module.exports = class ProductController {
  constructor(productService) {
    this.productService = productService;
    this.BASE_ROUTE = '/product';
  }

  configureRoutes(app) {
    const BASEROUTE = this.BASE_ROUTE;
    app.get(`${BASEROUTE}/get/all`, this.getAllProducts.bind(this));
    app.get(`${BASEROUTE}/get/:id`, this.getProductById.bind(this));
    app.post(`${BASEROUTE}/addstock`, this.addStock.bind(this));
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

  async addStock(req, res) {
    const stockLoad = req.body;
    await this.productService.addStock(stockLoad);
    res.sendStatus(200);
  }
};
