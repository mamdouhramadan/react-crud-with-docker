import React from 'react';
import './table.css';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { ActionButton } from '../ActionButton';
import { modalAction } from '../../redux/action';
import { UsersTableLogic } from './logic';
import { useDispatch } from 'react-redux';


const UsersTable = ({ header, data, ...rest }) => {
    const dispatch = useDispatch();

    const { handleDeleteUser, handleViewUser, handleEditUser } = UsersTableLogic();

    return (
        <div className='main-table'>

            {
                data.length > 0 ?
                    <MDBTable {...rest}>
                        <MDBTableHead>
                            <tr>
                                {header.map((item, index) => <th key={index} scope='col' className={`${(index - 1) === header.length && 'text-center'}`}>{item}</th>)}
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td className='text-capitalize'>{`${item.fullname}`}</td>
                                            <td>{`${(+item.age)}`}</td>
                                            <td className='text-capitalize'>{`${item.gender}`}</td>
                                            <td>{item.address}</td>
                                            <td width={100}>
                                                <ul className='action-list'>
                                                    <li>
                                                        <ActionButton
                                                            label={'View'}
                                                            icon={'eye'}
                                                            onClick={() => handleViewUser(item)}
                                                        />
                                                    </li>
                                                    <li>
                                                        <ActionButton
                                                            label={'Edit'}
                                                            icon={"create"}
                                                            onClick={() => handleEditUser(item)}
                                                        />
                                                    </li>
                                                    <li>
                                                        <ActionButton
                                                            label={'Delete'}
                                                            icon={"close"}
                                                            onClick={() => handleDeleteUser(item._id)}
                                                        />
                                                    </li>

                                                </ul>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </MDBTableBody>
                    </MDBTable >
                    :
                    <div className='bg-white p-5 my-3 text-center '>
                        <h5>No students found</h5>
                        <MDBBtn className='mt-3' onClick={() => dispatch(modalAction({ show: true }))}  >Add New Student</MDBBtn>
                    </div>
            }
        </div >
    )
}

export default UsersTable;