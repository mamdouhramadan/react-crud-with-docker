import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoadingSpinner from '../components/LoadingSpinner'
import AppModal from '../components/Modal'
import UsersTable from '../components/UsersTable'
import { PageLogic } from './HomePage.Logic'

function HomePage() {

    const { usersList, loading } = PageLogic();

    const header = ['#', 'Name', 'Age', 'Gender', 'Address', 'Actions']

    const pageTitle = 'Users List';

    return (
        <div>
            {
                // Loading Spinner if data is not loaded

                loading ?
                    <LoadingSpinner />
                    :
                    <div className='app-content'>

                        <Header />

                        <main className='main-content'>
                            <MDBContainer >
                                <div className='mb-5'>

                                    <Breadcrumbs title={pageTitle} />
                                    <UsersTable header={header} data={usersList} />
                                    <AppModal />

                                </div>
                            </MDBContainer>
                        </main>
                        <Footer />
                    </div>
            }
        </div>
    )
}

export default HomePage