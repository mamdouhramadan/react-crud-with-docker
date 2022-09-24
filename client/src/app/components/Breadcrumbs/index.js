import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { modalAction } from '../../redux/action'


function Breadcrumbs({ title }) {
    const dispatch = useDispatch()

    return (
        <div className='breadcrumb'>
            <MDBContainer className='p-0'>
                <div className='breadcrumb-ligh p-3 my-4'>
                    <MDBRow className='align-items-center'>
                        <MDBCol>
                            <MDBBreadcrumb>
                                <MDBBreadcrumbItem>
                                    <ion-icon name="home"></ion-icon>
                                    <span className='mx-2'>Home</span>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem active>{title}</MDBBreadcrumbItem>
                            </MDBBreadcrumb>
                        </MDBCol>


                        <MDBCol className='d-flex justify-content-end'>
                            <MDBBtn onClick={()=>dispatch(modalAction( {show:true} ))}>Add Student</MDBBtn>
                        </MDBCol>


                    </MDBRow>
                </div>
            </MDBContainer>
        </div>
    )

}

export default Breadcrumbs