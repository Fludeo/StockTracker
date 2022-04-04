/* eslint-disable no-param-reassign */
const { fromDtoToProductEntity } = require('../../product/mapper/productMapper');

module.exports = function fromDtoToProductList(list) {
  const result = list.map((item) => {
    const productEntity = fromDtoToProductEntity(item.product);
    item.product = productEntity;
    return item;
  });

  return result;
};
