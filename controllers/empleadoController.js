const {Empleado, Departamento} = require('../asociations')

const findAllEmpleados = async (req, res) => {
    if (req.params.codigo) {
        Empleado.findAll({
            where: {
                codigo: req.params.codigo
            }, 
            include: {
                model: Departamento
            }
        })
            .then((empleados) => {
                res.status(200).json(empleados)
            }) 
            .catch((err) => {
                console.error('Error when consulting empleados:', err.message);
                res.status(400).json({ message: err.message})
            });
    } else {
        if (Object.keys(req.body).length !== 0) {
            Empleado.findAll({
                where: req.body, 
                include: {
                    model: Departamento
                }
            })
                .then((empleados) => {
                    res.status(200).json(empleados)
                }) 
                .catch((err) => {
                    console.error('Error when consulting empleados:', err.message);
                    res.status(404).json({ message: err.message})
                });
        } else {
            Empleado.findAll({
                include: {
                    model: Departamento
                }
            })
                .then((empleados) => {
                    res.status(200).json(empleados)
                }) 
                .catch((err) => {
                    console.error('Error when consulting empleados:', err.message);
                    res.status(400).json({ message: err.message})
                });
        }
    }
  }

const createEmpleado = async (req, res) => {
    Empleado.create(req.body)
        .then((empleado) => {
            res.status(201).json({"message" : `Successfully created empleado: ${empleado.nombre} ${empleado.apellido1}`})
        }) 
        .catch((err) => {
            console.error('Error creating empleado:', err.message);
            res.status(400).json({ message: err.message})
        });
  }

const updateEmpleado = async (req, res) => {
    Empleado.update(
        req.body, 
        { where: 
            { 
                codigo: req.params.codigo
            }
        }
    )
    .then((empleado) => {
        res.status(201).json(empleado)
    }) 
    .catch((err) => {
        console.error('Error updating empleado:', err.message);
        res.status(400).json({ message: err.message})
    });
}

const deleteEmpleado = async (req, res) => {
    Empleado.destroy({
        where: {
            codigo: req.params.codigo
        }
    })
        .then((empleado) => {
            res.status(204).json()
        }) 
        .catch((err) => {
            console.error('Error deleting empleado:', err.message);
            res.status(400).json({ message: err.message})
        });
}

module.exports = {findAllEmpleados, createEmpleado, updateEmpleado, deleteEmpleado}