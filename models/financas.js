'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Financas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Financas.init({
    data: DataTypes.DATE,
    categoria_id: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    valor: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Financas',
  });
  return Financas;
};