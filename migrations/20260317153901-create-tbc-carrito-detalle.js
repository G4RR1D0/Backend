'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbc_carrito_detalle', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      id_carrito: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbc_carritos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbc_productos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },

      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },

      precio_unitario: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
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
    await queryInterface.dropTable('tbc_carrito_detalle');
  }
};