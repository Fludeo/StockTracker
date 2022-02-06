const { Model, DataTypes } = require('sequelize');

module.exports = class ProductListModel extends Model {
  static setup(sequelizeInstance) {
    ProductListModel.init({
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

    }, {
      tableName: 'sale_list_products',
      sequelize: sequelizeInstance, // We need to pass the connection instance
      modelName: 'ProductList', // We need to choose the model name
    });

    return ProductListModel;
  }
};
