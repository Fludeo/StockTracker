const { Model, DataTypes } = require('sequelize');

module.exports = class SaleModel extends Model {
  static setup(sequelizeInstance) {
    SaleModel.init({
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      totalVenta: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      ganancia: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

    }, {
      tableName: 'sales',
      sequelize: sequelizeInstance, // We need to pass the connection instance
      modelName: 'Sale', // We need to choose the model name
    });

    return SaleModel;
  }
};
