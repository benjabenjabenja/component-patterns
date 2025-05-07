import { useEffect, useState } from 'react';

export interface UseFormProps {
    initialValues: any;
}

export const useForm = <T>(initialValues: T) => {
    const [formData, setFormData] = useState<T>({ ...initialValues });

    useEffect(() => {
        const formDateStorage = localStorage.getItem('formData');

        if (formDateStorage) {
            setFormData({ ...JSON.parse(formDateStorage) });
        }

        return () => {
            resetForm();
        }

    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name as keyof T]: e.target.value as T[keyof T]
        });
    }

    const resetForm = () => {
        setFormData({ ...initialValues });
    }

    return {
        formData,
        handleInputChange,
        resetForm
    }
}
