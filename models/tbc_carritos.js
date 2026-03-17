'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbc_carritos extends Model {
    static associate(models) {
      tbc_carritos.belongsTo(models.tbc_usuarios, {
        foreignKey: 'id_usuario'
      });
    }
  }

  tbc_carritos.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'activo'
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'tbc_carritos',
    tableName: 'tbc_carritos'
  });


tbc_carritos.associate = (models) =>{
  tbc_carritos.belongsTo(models.tbc_usuarios, {
    foreignKey: 'id_usuario',
    as: 'tbc_usuario'
  });
}

  return tbc_carritos;
};