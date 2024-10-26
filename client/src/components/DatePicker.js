import React from "react";
import DataView from 'react-datepicker'
import { Formik, Form, Field, ErrorMessage} from "formik"
import "react-datepicker/dist/react-datepicker.css";
import TextError from './TextError'


function DatePicker (props) {
    const { label, name, ...rest} = props
    const defaultValue = new Date()


    return(
        <div className="flex w-50 items-center mb-2">
            <label htmlFor={name}>{label}</label>
            <Field
            name={name}
            >
                {
                    ({form, field}) => {
                        const {setFieldValue} = form
                        const { value } = field
                        return ( 
                            <DataView 
                            
                             id={name}
                            {...field} 
                            {...rest} 
                            selected={value} 
                            onChange={val => setFieldValue(name, val)} 
                            className="hover:border-gray-900 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 ml-2 " 
                            />
                        )
                    }
                }
            
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DatePicker