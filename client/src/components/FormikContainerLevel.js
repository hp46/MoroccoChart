import React from 'react'
import FormikControl from "./FormikControl";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Formik, Form, Field} from "formik"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function FormikContainerLevel() {
let navigate = useNavigate(); 
let { id } = useParams();
const [patientObject, setPatientObject] = useState({});
const [levels, setlevels] = useState([]);
const [open, setOpen] = useState(false)
const handleClose = () => setOpen(false)

const initialValues = { 
    bloodSugarLevel: 0,
    hba1c:0,
    weight: 0,
    cholesterol: 0,
    hemoglobin: 0,
    systolicBloodPressure: 0,
    diastolicBloodPressure: 0,
    InfoId:parseInt(id)
    
}


const onSubmit = (data) => {
    axios.post("https://localhost:3001/levels", data).then((response) => {
        console.log(response.data)
    })
    setOpen(true);
    
}

useEffect(() => {
    axios.get(`https://localhost:3001/patientsinfo/byId/${id}`).then((response) => {
        setPatientObject(response.data);
        console.log(response.data);
}); 
    axios.get(`https://localhost:3001/levels/${id}`).then((response) => {
        setlevels(response.data);
        console.log(response.data);
}); 
}, []);

  return (
    <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
             {
        formik => 
        <Form className="flex flex-col w-5/6">
            <FormikControl control='input' type='bloodSugarLevel' label='Blood Sugar' name="bloodSugarLevel"/>
            <FormikControl control='input' type='hba1c' label='HBA1C' name="hba1c"/>
            <FormikControl control='input' type='weight' label='Weight' name="weight"/>
            <FormikControl control='input' type='cholesterol' label='Cholesterol' name="cholesterol"/>
            <FormikControl control='input' type='hemoglobin' label='Hemoglobin' name="hemoglobin"/>
            <FormikControl control='input' type='systolicBloodPressure' label='Systolic Blood Pressure' name="systolicBloodPressure"/>
            <FormikControl control='input' type='diastolicBloodPressure' label='DisatolicBloodPressure' name="diastolicBloodPressure"/>
            <div>
                <button type="submit"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:border-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5 float-left"
                >
                    Add Level
                </button>
                <Modal
                    className="absolute inset-0  mx-auto my-auto"
                    open={open}
                    onClose={handleClose}
                >
                    <Box
                    className="absolute inset-0  mx-auto my-auto h-30 w-1/2 bg-white"
                    >      
                        <div className="flex flex-col h-full items-center justify-center">
                            <h1 className="uppercase w-1/2 decoration-4 text-2xl">
                                Patients level has been succesfully added
                            </h1>
                            <button
                                onClick={() => navigate(0)}
                                className="text-white bg-gradient-to-br uppercase from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:border-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-4 text-center me-2 mt-5 "
            >
                                    Close
                            </button>
                        </div>
                    </Box>        
                </Modal>
            </div>
        </Form>
        }
     </Formik>
  )
}

export default FormikContainerLevel