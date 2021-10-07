/* eslint-disable class-methods-use-this */
module.exports = class DefaultController {
  constructor(productService) {
    this.productService = productService;
    this.BASE_ROUTE = '/';
  }

  configureRoutes(app) {
    const BASEROUTE = this.BASE_ROUTE;
    app.get(`${BASEROUTE}`, this.index.bind(this));
    app.post(`${BASEROUTE}login`, this.login.bind(this));
    app.get(`${BASEROUTE}home`, this.home.bind(this));
  }

  /**
 *
 * @param {import('express'.Request)} req
 * @param {import('express').Response} res
 */

  async index(req) {
    console.log(req.path);
  }
  /**
 *
 * @param {import('express'.Request)} req
 * @param {import('express').Response} res
 */

  async login(req, res) {
    req.session.created = true;
    console.log(`username ${req.body.username}`);
    console.log(`password ${req.body.password}`);
    res.status(200).send('logged');
  }

  async home(req, res) {
    if (req.session.created) {
      res.redirect('/succes');
    } else { res.redirect('nosession'); }
  }
};
