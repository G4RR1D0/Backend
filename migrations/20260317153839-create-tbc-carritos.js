'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbc_carritos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
    model: 'tbc_usuarios',
    key: 'id'
  }
},
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'activo'
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      total: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbc_carritos');
  }
};