module.exports = class SaleDto {
  constructor({ productList, saleTotal, totalEarn }) {
    this.totalEarn = totalEarn;
    this.productList = productList;
    this.saleTotal = saleTotal;
  }
};
