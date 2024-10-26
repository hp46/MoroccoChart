import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Radio(props) {
    const { label, name, options, ...rest} = props
  return (
    <div className="flex w-50 items-center mb-2">
        <label>{label}</label>
        <div className="ml-2  border-2 border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5">
            <Field 
            name={name} 
            {...rest}
            className="hover:border-gray-900 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
            >
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input
                                    type='radio' 
                                    id={option.value} 
                                    {...field} 
                                    value={option.value} 
                                    checked={field.value === option.value}
                                    />
                                    <label className="mr-2" htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
        </div>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Radio