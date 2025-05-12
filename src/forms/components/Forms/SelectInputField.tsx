import { ErrorMessage, Field, useField } from 'formik';
import React from 'react'

interface SelectInputFieldProps {
    name: string;
    label: string;
    placeholder?: string;
    [key: string]: any;
}

const SelectInputField: React.FC<SelectInputFieldProps> = ({label, ...rest}: SelectInputFieldProps) => {
    const [field] = useField(rest)
    
    return (
        <>
            <label htmlFor={rest?.id || rest.name}>{label}</label>
            <select {...field} {...rest} />
            <ErrorMessage name={rest.name} component="span" />
        </>
    );
}

export default SelectInputField