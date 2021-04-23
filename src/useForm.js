import {useState} from 'react';

// custom hook
// this can now be called throughout the app
// it has no UI
// it is just the logic for setting values as a hook
export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [values, e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }]
}