import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function TextArea(props) {
    const { label, name, ...rest} = props
  return (
    <div className="flex flex-col">
        <label htmlFor={name}>{label}</label>
        <Field as="textarea" id={name} name={name} {...rest} className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 hover:border-gray-900"/>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default TextArea