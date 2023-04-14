const {sequelize} = require('../database');
const { DataTypes } = require('sequelize');

const Departamento = sequelize.define('departamento', {
    codigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    presupuesto: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
}, {
    tableName: 'departamento',
    timestamps: false,
});
  
module.exports = {Departamento};