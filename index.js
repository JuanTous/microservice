const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./database');
const empleadoRouter = require('./routes/empleadoRouter');
const departamentoRouter = require('./routes/departamentoRouter');

const port = 1234;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use("/empleados", empleadoRouter);
app.use("/departamentos", departamentoRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL successful');
    app.listen(port, err => {
      if (err) {
          return console.error(err.message);
      }
      console.log(`Server is listening on ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error to connect to the database:', err);
  });
