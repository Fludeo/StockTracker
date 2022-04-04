module.exports = class SaleDto {
  constructor({
    id = null, productList, saleTotal, totalEarn,
  }) {
    this.id = id;
    this.productList = productList;
    this.totalEarn = totalEarn;
    this.saleTotal = saleTotal;
  }
};
