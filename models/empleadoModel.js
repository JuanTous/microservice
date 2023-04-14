const {sequelize} = require('../database');
const { DataTypes } = require('sequelize');
const { Departamento } = require('./departamentoModel')

const Empleado = sequelize.define('empleado', {
    codigo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nif: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido1: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido2: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    codigo_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departamento',
        key: 'codigo'
      },
      validate: {
        async existeDepartamento(value) {
          const departamento = await Departamento.findByPk(value);
          if (!departamento) {
            throw new Error('Departamento not exist');
          }
        }
      }
    }
}, {
    tableName: 'empleado',
    timestamps: false,
});
  
module.exports = {Empleado};