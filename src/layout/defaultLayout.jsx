import React from 'react';
import { Outlet } from 'react-router-dom';

const defaultLayout = () => {
    return;
    <>
        <header></header>
        <main className='container'>
            <Outlet />
        </main>;
    </>
};

export default defaultLayout;