import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import FormikContainerLevel from "../components/FormikContainerLevel";

function PatientsDetail () {
    let navigate = useNavigate(); 
    let { id } = useParams();
    const [patientObject, setPatientObject] = useState({});
    const [levels, setlevels] = useState([]);
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    const date = patientObject.date.slice(0, 10)


    useEffect(() => {
        axios.get(`https://localhost:3001/patientsinfo/byId/${id}`).then((response) => {
            setPatientObject(response.data);
            console.log(response.data);
    }); 
        axios.get(`http://localhost:3001/levels/${id}`).then((response) => {
            setlevels(response.data);
            console.log(response.data);
    }); 
}, []);

    const deletePatient = (id) => {
        axios.delete(`https://localhost:3001/patientsinfo/${id}`)
        .then(() => {
            console.log(`Deleted post with ID ${patientObject.id}`);
            navigate(`/searchPatients/`)
        })
    }

    const deleteLevel = (id) => {
        axios.delete(`https://localhost:3001/levels/${id}`)
        .then(()=>{
            console.log(`Deleted post with ID ${patientObject.id}`);
            setOpen(true);
        })
    }
    return(
        <section className="flex flex-col h-dvh">
            <div className="pt-10 pb-10">
                 <div className="uppercase font-bold place-content-evenly ">
                    <h1>
                        Patient ID: {patientObject.identificationKey}
                    </h1> 
                    <h1>
                        Patient Name: {patientObject.firstName} {patientObject.lastName}
                    </h1>
                </div>
                <div className=" flex flex-row flex-wrap uppercase place-content-between w-4/5">
                    <p>
                        Sex: {patientObject.sex}
                    </p>  
                    <p>
                        Location: {patientObject.location}
                    </p>
                    <p>
                        Phone #: {patientObject.phoneNumber}
                    </p>
                    <p>
                        Date of Entry: {date}
                    </p>
                </div>
            </div>
            <div className="flex flex-row overflow-auto border-2 border-slate-600 rounded-lg w-4/5 mb-10">   
                <div className="m-5">
                <FormikContainerLevel/>
                </div>
                <div className="flex flex-row m-5 flex-wrap overflow-auto">
                    {levels.map((level, key) => {
                        return(
                        <div className="flex pl-10 pb-10  ">
                            <div className=" h-1/2">
                                <p className="" key={key}>{level.id}</p>
                                <div className="">    
                                    <p key={key}>
                                        {level.bloodSugarLevel} | Blood Sugar Level
                                    </p>
                                    <p key={key}>
                                        {level.hba1c} | Hba1c
                                    </p>
                                    <p key={key}>
                                        {level.weight} | Weight
                                    </p>
                                    <p key={key}>
                                        {level.cholesterol} | Cholesterol Level
                                    </p>
                                    <p key={key}>
                                        {level.hemoglobin} | Hemoglobin Level
                                    </p>
                                    <p key={key}>
                                        {level.systolicBloodPressure} / {level.diastolicBloodPressure} | Blood Pressure
                                    </p>
                                    <div>
                                        <button 
                                        className="hover:text-red-600"
                                        onClick={() => navigate(0)}>
                                            x
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
                                                    <h1 className="uppercase w-1/2 decoration-4 text-5xl">
                                                        This Level has been sucessfully deleted!
                                                    </h1>
                                                    <button
                                                        onClick={() => navigate(`/patientsinfo/${id}`)}
                                                        className="text-white bg-gradient-to-br uppercase from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:border-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-4 text-center me-2 mt-5 "
                                    >
                                                            Continue to Profile
                                                    </button>
                                                </div>
                                            </Box>        
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PatientsDetail