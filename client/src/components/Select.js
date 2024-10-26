import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Select(props) {
    const { label, name, options, ...rest} = props
  return (
    <div className='mb-2'>
        <label htmlFor={name}>{label}</label>
        <Field as="select" id={name} name={name} {...rest} className="hover:border-gray-900border-2 border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5">
            {options.map(option => {
                    return(
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })}
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select