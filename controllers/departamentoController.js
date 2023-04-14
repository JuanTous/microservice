const {Departamento} = require('../asociations')

const findAllDepartamentos = async (req, res) => {
    if (req.params.codigo) {
        Departamento.findAll({
            where: {
                codigo: req.params.codigo
            }
        })
            .then((departamentos) => {
                res.status(200).json(departamentos)
            }) 
            .catch((err) => {
                console.error('Error al consultar departamentos:', err.message);
                res.status(400).json({ message: err.message})
            });
    } else {
        if (Object.keys(req.body).length !== 0) {
            Departamento.findAll({
                where: req.body
            })
                .then((departamentos) => {
                    res.status(200).json(departamentos)
                }) 
                .catch((err) => {
                    console.error('Error al consultar departamentos:', err.message);
                    res.status(404).json({ message: err.message})
                });
        } else {
            Departamento.findAll()
                .then((departamentos) => {
                    res.status(200).json(departamentos)
                }) 
                .catch((err) => {
                    console.error('Error al consultar departamentos:', err.message);
                    res.status(400).json({ message: err.message})
                });
        }
    }
  }

const createDepartamento = async (req, res) => {
    Departamento.create(req.body)
        .then((departamento) => {
            res.status(201).json({"message" : `Departamento creado con éxito: ${departamento.nombre} ${departamento.apellido1}`})
        }) 
        .catch((err) => {
            console.error('Error al crear el departamento:', err.message);
            res.status(400).json({ message: err.message})
        });
  }

const updateDepartamento = async (req, res) => {
    Departamento.update(
        req.body, 
        { where: 
            { 
                codigo: req.params.codigo
            }
        }
    )
    .then((departamento) => {
        res.status(201).json(departamento)
    }) 
    .catch((err) => {
        console.error('Error al actualizar el departamento:', err.message);
        res.status(400).json({ message: err.message})
    });
}

const deleteDepartamento = async (req, res) => {
    Departamento.destroy({
        where: {
            codigo: req.params.codigo
        }
    })
        .then((departamento) => {
            res.status(204).json()
        }) 
        .catch((err) => {
            console.error('Error al eliminar el departamento:', err.message);
            res.status(400).json({ message: err.message})
        });
}

module.exports = {findAllDepartamentos, createDepartamento, updateDepartamento, deleteDepartamento}