module.exports = class ProductRepository {
  constructor(DataBase) {
    this.DataBase = DataBase;
  }

  async getById(id) {
    const stmt = this.DataBase.prepare('SELECT * FROM products WHERE id = ? ');
    const product = stmt.get(id);
    return product;
  }
};
