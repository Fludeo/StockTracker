module.exports = class ProductController {
  constructor(productService) {
    this.productService = productService;
    this.BASE_ROUTE = '/product';
  }

  configureRoutes(app) {
    const BASEROUTE = this.BASE_ROUTE;
    app.get(`${BASEROUTE}/get/all`);
    app.get(`${BASEROUTE}/get/:id`, this.getById.bind(this));
    app.post(`${BASEROUTE}/load-csv`, this.loadFromCsv.bind(this));
  }

  /**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

  async getById(req, res) {
    const product = await this.productService.getById(req.params.id);
    res.json(product);
  }

  /**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
};
