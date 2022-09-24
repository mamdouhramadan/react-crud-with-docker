export const API_URL = process.env.REACT_APP_SERVER_URL;


export const initialModal = {
    title: 'Add User',
    type: 'add',
    show: false,
    user: {}
}

export const genderOptions = [
    {
        value: "male",
        label: "Male"
    },
    {
        value: "Female",
        label: "Female"
    },

]

export const studentForm = [
    {
        label: 'Full Name',
        type: 'text',
        name: 'fullname',
        icon: 'person',
        readOnly: false,
        required: true,
    },
    {
        label: 'Age',
        type: 'number',
        name: 'age',
        icon: 'calendar',
        readOnly: false,
        required: true,
    },
    {
        label: 'Gender',
        type: 'select',
        name: 'gender',
        icon: 'transgender',
        required: true,
        options: genderOptions
    },
    {
        label: 'Address',
        type: 'textarea',
        name: 'address',
        icon: 'location',
        required: true,
        // value: values?.nationality || '',
        options: []
    }
]
