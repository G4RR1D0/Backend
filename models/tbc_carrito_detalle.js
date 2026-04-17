'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbc_carrito_detalle extends Model {
    static associate(models) {
      tbc_carrito_detalle.belongsTo(models.tbc_carritos, {
        foreignKey: 'id_carrito',
        as: 'carrito'
      });

      tbc_carrito_detalle.belongsTo(models.tbc_productos, {
        foreignKey: 'id_producto',
        as: 'producto'
      });
    }
  }

  tbc_carrito_detalle.init({
    id_carrito: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'tbc_carrito_detalle',
    tableName: 'tbc_carrito_detalle' 
  });

  return tbc_carrito_detalle;
};