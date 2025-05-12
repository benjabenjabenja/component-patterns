import React from 'react'
//Lib:
import { ErrorMessage, useField } from 'formik'
//Utils:
import { INPUT_TYPE } from '../../../utils/enum'

export interface InputTextFieldProps {
    name: string;
    label: string;
    type?: INPUT_TYPE;
    placeholder?: string;
    [key: string]: any;
}

const InputTextField: React.FC<InputTextFieldProps> = ({label, ...rest}: InputTextFieldProps) => {
    const [field] = useField(rest)

    return (
        <>
            <label htmlFor={rest?.id || rest.name}>{label}</label>
            <input type={rest.type} placeholder={rest.placeholder} {...field} {...rest} />
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
                
                *** const [field, meta] = useField(rest) ***
               
                <label htmlFor={rest?.id || rest.name}>{label}</label>
                <input type={rest.type} placeholder={rest.placeholder} {...field} {...rest} />
                {meta.touched && meta.error && <span className="error">{meta.error}</span>}

            */}
        </>
    );
}

export default InputTextField