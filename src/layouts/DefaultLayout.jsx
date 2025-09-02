import React from 'react';
import { Outlet } from 'react-router-dom'; // OUTLET CI SERVE DA SEGNAPOSTO CIOE' IL CONTENUTO DELLE PAGINE
// VA ALL'INTERNO DI OUTLET O MEGLIO SOSTITUIRSI
import Header from '../components/Header';
import GlobalContext from '../context/globalContext';
import { useContext } from 'react';
import Loader from '../components/Loader';

function DefaultLayout() {
    const { isLoading } = useContext(GlobalContext);
    return (
        <>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
};

export default DefaultLayout;