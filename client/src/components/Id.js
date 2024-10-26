import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { v4 as uuid } from "uuid"


function Id(props) {
    const { label, name, ...rest} = props
    const uniqueId = uuid()
    const shortId = uniqueId.slice(0,8);

  return (
    <div className="flex flex-col">
        <label htmlFor={name}>{label}</label>
        <Field 
          id={name} 
          name={name} 
          value={shortId}
          {...rest}
          class="hover:border-gray-900 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block p-1 "
        />
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Id