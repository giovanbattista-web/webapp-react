import { Outlet } from 'react-router-dom'; // OUTLET CI SERVE DA SEGNAPOSTO CIOE' IL CONTENUTO DELLE PAGINE
// VA ALL'INTERNO DI OUTLET O MEGLIO SOSTITUIRSI
import Header from '../components/Header';

function DefaultLayout() {
    return (
        <>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
        </>
    )
};

export default DefaultLayout;