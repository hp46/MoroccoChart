import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input(props) {
    const { label, name, ...rest} = props
  return (
    <div className='flex flex-col mb-2'>
        <label htmlFor={name}>{label}</label>
        <Field 
          id={name} 
          name={name} 
          {...rest}
          class="hover:border-gray-900 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block p-1 "
        />
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input