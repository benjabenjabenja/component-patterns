import { ErrorMessage, useField } from 'formik';
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

            {/* 
                OTRA FORMA DE HACERLO: 
                (para obtener mas control sobre el error)

                field: {
                    name: rest.name,
                    value: rest.value,
                    onChange: rest.onChange,
                    onBlur: rest.onBlur,
                }
                
                meta: {
                    touched: true,
                    error: 'Error de prueba',
                }
                
                *** Field ***
                import { Field } from 'formik';
                
                <Field as="select" {...field} {...rest}>
                    {array.map( (input) => (
                        <option key={input.value} value={input.value}>{input.label}</option>
                    ))}
                </Field>

                *** const [field, meta] = useField(rest) ***
               
                <label htmlFor={rest?.id || rest.name}>{label}</label>
                <Field as="select" {...field} {...rest} />
                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
            */}
        </>
    );
}

export default SelectInputField