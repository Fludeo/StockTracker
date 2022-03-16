const { fromPostToSaleEntity } = require('../mapper/saleMapper');
/**
 *
 * @param {import('../service/saleService')} saleService
 * @param {import('../../product/service/productService')} productService
 */
module.exports = class SaleController {
  constructor(saleService, productService) {
    this.saleService = saleService;
    this.productService = productService;
    this.BASE_ROUTE = '/sale';
  }

  configureRoutes(app) {
    const BASEROUTE = this.BASE_ROUTE;
    app.get(`${BASEROUTE}/get/all`, this.getAllSales.bind(this));
    app.get(`${BASEROUTE}/get/daterange/:from/:to`, this.getBetweenDatesSales.bind(this));
    app.post(`${BASEROUTE}/new`, this.newSale.bind(this));
  }
  /**
 *
 * @param {import('express'.Request)} req
 * @param {import('express').Response} res
 */

  async getAllSales(req, res) {
    try {
      const AllSales = await this.saleService.getAllSales();
      res.json(AllSales);
    } catch (err) {
      res.status(500);
      res.json({ error: err });
    }
  }

  /**
 *
 * @param {import('express'.Request)} req
 * @param {import('express').Response} res
 */
  async newSale(req, res) {
    const { listaProductos } = req.body;
    const listSubtotals = [];
    try {
      const subtotales = listaProductos.map(async (item) => {
        const product = await this.productService.getById(item.itemId);
        const result = (product.getFinalPrice() * (1.0 + (-item.descuento / 100)) * item.quantity);
        listSubtotals.push(item);
        listSubtotals[listSubtotals.indexOf(item)].product = product;
        listSubtotals[listSubtotals.indexOf(item)].descuento = item.descuento;
        listSubtotals[listSubtotals.indexOf(item)].subTotal = result;
        return result;
      });

      const totalVenta = (await Promise.all(subtotales)).reduce((a, b) => a + b, 0);

      const subtotalesCosto = listaProductos.map(async (item) => {
        const product = await this.productService.getById(item.itemId);
        const result = product.getCostPrice() * item.quantity;
        return result;
      });
      const totalVentaCosto = (await Promise.all(subtotalesCosto)).reduce((a, b) => a + b, 0);
      const ganancia = (totalVenta - totalVentaCosto);

      const sale = { listaProductos: listSubtotals, totalVenta, ganancia };

      const saleEntity = fromPostToSaleEntity(sale);

      await this.saleService.addNewSale(saleEntity);
      res.sendStatus(200);
    } catch (err) {
      res.status(500);
      res.json({ error: err });
    }
  }

  /**
 *
 * @param {import('express'.Request)} req
 * @param {import('express').Response} res
 */
  async getBetweenDatesSales(req, res) {
    const startDate = new Date(req.params.from);
    const endDate = new Date(req.params.to);

    try {
      const sales = await this.saleService.getBetweenDatesSales(startDate, endDate);
      res.json(sales);
    } catch (err) {
      res.status(500);
      console.log(err.message);
      res.json({ error: err });
    }
  }
};
