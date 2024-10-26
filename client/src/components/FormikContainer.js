import React from "react";
import { Formik, Form, Field} from "formik"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { v4 as uuid } from "uuid"
import * as Yup from 'yup'
import "react-datepicker/dist/react-datepicker.css";
import FormikControl from "./FormikControl";
import axios from 'axios';
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'


function FormikContainer () {
    let navigate = useNavigate(); 
    const uniqueId = uuid()
    const shortId = uniqueId.slice(0,8);
    

    const [length, setLenght] = useState([])
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)


    const dropdownOptions = [
        {key: 'Select an option', value: ''},
        {key: 'Sale', value:'Sale'},
        {key: 'Rabat', value:'Rabat'},
        {key: 'Tanger', value:'Tanger'}
    ]  

    const radioOptions = [
        {key: 'Male', value:'Male'},
        {key: 'Female', value:'Female'},
    ]

    const radioOptions2 = [
        {key: 'Yes', value:'Yes'},
        {key: 'No', value:'No'},
    ]

    const initialValues = {
        identificationKey: shortId,
        firstName: "",
        lastName: "",
        sex: "",
        location: "Sale",
        phoneNumber: "",
        age: "",
        smoking: "",
        date: "",
        comment: ""
    }

    const validationSchema = Yup.object({
        identificationKey: Yup.string().required("ID requried*"),
        firstName: Yup.string().required("First Name requried*"),
        lastName:Yup.string().required("Last Name requried*"),
        sex: Yup.string().required("Select Male or Female"),
        location: Yup.string().required("Must be answered"),
        phoneNumber: Yup.string().required(),
        age: Yup.string().required("Must be answered"),
        smoking: Yup.string().required("Must be answered"),
        date: Yup.string().required(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/patientsinfo", data).then((response) => {
            console.log("it worked")
            axios.get("http://localhost:3001/patientsinfo").then((response) => {
                setLenght(response.data.length);
              })
            console.log("it worked")
            setOpen(true);
        })
    }

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
            formik => 
            <Form className="flex flex-col w-5/6">
                {/* <div className="">
                    <label
                    >Identification Number</label>
                    <Field
                    id="identificationKey" 
                    name="identificationKey" 
                    value={shortId}
                    className="hover:border-gray-900 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block p-1 uppercase" 
                    />
                </div> */}
                {/* <FormikControl control='id' type='identificationKey' label='ID' name='identificationKey'/> */}
                <FormikControl control='input' type='firstName' label='First Name' name="firstName"/>
                <FormikControl control='input' type='lastName' label='Last Name' name="lastName"/>
                <FormikControl control='input' type='phoneNumber' label='Phone Number #' name="phoneNumber"/>
                <FormikControl control='input' type='age' label='Age' name="age"/>
                <FormikControl control='select' label='Center Location:' name='location' options={dropdownOptions}/>
                <div className="flex flex-row place-content-between ">
                    <FormikControl control='radio' label='Sex:' name='sex' options={radioOptions} />
                    <FormikControl control='radio' label='Smoking:' name='smoking' options={radioOptions2} />
                </div>
                <FormikControl control='date' label='Date of Registeration: ' name='date' />
                <FormikControl control='textarea' label='Additional Comment' name='comment'/>
                <div className="pt-3">
                    <button type="submit" 
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 float-right"
                    >
                        Submit Patient
                    </button>
                    <Modal
                        className="absolute inset-0  mx-auto my-auto p-10"
                        open={open}
                        onClose={handleClose}
                    >
                        <Box
                        className="absolute inset-0  mx-auto my-auto h-1/2 w-1/2 bg-white"
                        >      
                            <div className="flex flex-col h-full items-center justify-center">
                                <h1 className="uppercase w-1/2 decoration-4 text-3xl">

                                </h1>
                                <h1 className="uppercase w-1/2 decoration-4 text-2xl">
                                    This Patient have been sucessfully registered!
                                </h1>
                                <button
                                    onClick={() => navigate(`/patientsinfo/${length}`)}
                                    className="text-white bg-gradient-to-br uppercase from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:border-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-4 text-center me-2 mt-5 "
                >
                                        Continue to Profile
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

export default FormikContainer