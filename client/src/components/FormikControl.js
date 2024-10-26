import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import Radio from './Radio'
import DatePicker from './DatePicker'
import Id from './Id'


function FormikControl(props) {
    const { control, ...rest } = props
    switch(control) {
        case 'input': 
            return <Input {...rest} />
        case 'id': 
            return <Id {...rest} />    
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <Radio {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        default: return null
    }
}

export default FormikControl