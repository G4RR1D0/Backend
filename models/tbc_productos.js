'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbc_productos extends Model {
    static associate(models) {
      tbc_productos.belongsTo(models.tbc_categorias, {
        foreignKey: 'id_categoria',
        as: 'categoria'
      });
    }
  }

  tbc_productos.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbc_productos',
    tableName: 'tbc_productos',
    timestamps: false
  });

  return tbc_productos;
};