const express = require ('express')
const app = express ()

const cors= require('cors');

const db = require('./models')

app.use(express.json());
// app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Router
const patientRouter = require('./routes/PatientsInfo')
app.use("/patientsinfo", patientRouter)

const levelRouter = require('./routes/Level')
app.use("/levels", levelRouter)


db.sequelize.sync().then()
app.listen(3001, () => {
    console.log("Server is running on port 3001")
})