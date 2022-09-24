import { MDBInputGroup } from 'mdb-react-ui-kit'
import React from 'react'

const InputField = ({ form, readOnly, onChange, value }) => {

    switch (form.type) {
        case 'text':
            return (

                <div className='form-group'>
                    <label>{form.label}</label>
                    <MDBInputGroup textBefore={<ion-icon name={form.icon}></ion-icon>} className='mb-3'>
                        <input
                            name={form.name}
                            readOnly={readOnly}
                            onChange={onChange}
                            className='form-control'
                            type={form.type || 'text'}
                            placeholder={form.label}
                            value={value || ''}

                        />
                    </MDBInputGroup>
                </div>
            )
        case 'select':
            return (
                <div className='form-group'>
                    <label>{form.label}</label>
                    
                    <MDBInputGroup textBefore={<ion-icon name={form.icon}></ion-icon>} className='mb-3'>
                        {
                            form.options &&
                            <select
                                disabled={readOnly}
                                name={form.name}
                                readOnly={readOnly}
                                onChange={onChange}
                                className='form-control'
                                type={form.type || 'text'}
                                placeholder={form.label}
                                value={value || 0}
                            >
                                <option value={0} disabled >{`Select ${form.label}`}</option>
                                {
                                    form.options?.map(((item, index) => {
                                        return <option key={index} value={item.value}>{item.label}</option>
                                    }))
                                }
                            </select>
                        }
                    </MDBInputGroup>
                </div>
            )
        default:
            return (
                <div className='form-group'>
                    <label>{form.label}</label>
                    <MDBInputGroup textBefore={<ion-icon name={form.icon}></ion-icon>} className='mb-3'>
                        <input
                            name={form.name}
                            readOnly={readOnly}
                            onChange={onChange}
                            className='form-control'
                            type={form.type || 'text'}
                            placeholder={form.label}
                            value={value || ''}

                        />
                    </MDBInputGroup>
                </div>
            )

    }


}

export default InputField