const express = require ('express')
const app = express ()

const cors= require('cors');

const db = require('./models')

app.use(express.json());
app.use(cors())

// Router
const patientRouter = require('./routes/PatientsInfo')
app.use("/patientsinfo", patientRouter)

const levelRouter = require('./routes/Level')
app.use("/levels", levelRouter)


db.sequelize.sync().then()
app.listen(3001, () => {
    console.log("Server is running on port 3001")
})