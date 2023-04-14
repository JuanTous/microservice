const { Empleado } = require('./models/empleadoModel')
const { Departamento } = require('./models/departamentoModel')

Empleado.belongsTo(Departamento, { foreignKey: 'codigo_departamento'});
Departamento.hasMany(Empleado, { foreignKey: 'codigo_departamento' });

module.exports = {
    Empleado,
    Departamento
}