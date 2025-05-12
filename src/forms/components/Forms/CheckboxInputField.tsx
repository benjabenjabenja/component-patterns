import React from 'react'
//Lib:
import { ErrorMessage, useField } from 'formik';
//Utils:
import { INPUT_TYPE } from '../../../utils/enum';

interface CheckboxInputFieldProps {
    label: string;
    name: string;
    [key: string]: any;
}

const CheckboxInputField: React.FC<CheckboxInputFieldProps> = ({ label, ...props }) => {
    const [field] = useField({ ...props, type: INPUT_TYPE.CHECKBOX });
    
    return (
        <>
            <label>
                <input type={INPUT_TYPE.CHECKBOX} {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" />
        </>
    )
};

export default CheckboxInputField