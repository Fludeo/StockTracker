const { Model, DataTypes } = require('sequelize');

module.exports = class ProductModel extends Model {
  static setup(sequelizeInstance) {
    ProductModel.init({
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      descripcion: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      precioCosto: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      precioModificador: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
    }, {
      tableName: 'products',
      sequelize: sequelizeInstance, // We need to pass the connection instance
      modelName: 'Product', // We need to choose the model name
    });

    return ProductModel;
  }
};
