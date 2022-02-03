module.exports = function SetAssociations(container) {
  const product = container.get('ProductModel');
  const sale = container.get('SaleModel');
  const saleListProduct = container.get('ProductListModel');

  product.belongsToMany(sale, { through: saleListProduct });
  sale.belongsToMany(product, { through: saleListProduct });
};
