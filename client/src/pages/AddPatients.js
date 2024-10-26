import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import DatePicker from "react-datepicker";
import addimage from "../images/computer-02.png"
import "react-datepicker/dist/react-datepicker.css";
import DataPick from "../components/DatePicker";
import FormikContainer from "../components/FormikContainer";

export default function AddPatients() {
    return(
        <div
        className="max-w-full max-h-full h-screen flex-row content-center "
        >
             <div className="content-center w-2/3 items-center justify-center ">
                        <img className="h-48 w-50" src={addimage} alt="add" />
                        <h1 className="uppercase w-1/2 decoration-4 text-5xl font-bold pb-2 font-header text-slate-600">
                        Add <br></br>Patients
                        </h1>
                        <h2 className="font-header uppercase text-2xl text-gray-600 pb-5"> Personal  Information</h2>
                        <hr className="border-2"></hr>
            </div>
            <FormikContainer></FormikContainer>
        </div>
    )
}