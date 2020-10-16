const express = require('express');
const bodyParser = require('body-parser');
const employeeRouters = require('./routes/employeeRoute');
const cors = require('cors');
// require("dotenv").config();
const userRoutes = require('./routes/userRoute')
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3009;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// using as middleware
app.use('/api/v1/employees',employeeRouters,userRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
// Configurar cabeceras y cors
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });