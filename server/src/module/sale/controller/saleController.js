module.exports = class SaleController {
  constructor(saleService) {
    this.saleService = saleService;
    this.BASE_ROUTE = '/sale';
  }

  configureRoutes(app) {
    const BASEROUTE = this.BASE_ROUTE;
    app.get(`${BASEROUTE}/get/all`, this.GetAllSales.bind(this));
    app.post(`${BASEROUTE}/new`, this.NewSale.bind(this));
  }
  /**
 *
 * @param {import('express'.Request)} req
 * @param {import('express').Response} res
 */

  async GetAllSales(req, res) {
    const AllSales = await this.saleService.getAllSales();

    res.json(AllSales);
  }

  /**
 *
 * @param {import('express'.Request)} req
 * @param {import('express').Response} res
 */
  async NewSale(req, res) {
    const sale = req.body;
    const a = sale.list.map((item) => console.log(`Id: ${item.itemId}Cantidad:${item.quantity} subTotal: ${item.subTotal} `));
    // await this.saleService.AddNewSale(sale);
    res.sendStatus(200);
  }
};
