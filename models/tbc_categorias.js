'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbc_categorias extends Model {
    static associate(models) {
      tbc_categorias.hasMany(models.tbc_productos, {
        foreignKey: 'id_categoria',
        as: 'productos'
      });
    }
  }

  tbc_categorias.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbc_categorias',
    tableName: 'tbc_categorias',
    timestamps: false
  });

  return tbc_categorias;
};