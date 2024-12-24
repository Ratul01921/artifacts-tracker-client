import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            
            <section className='bg-blue-600'>
            <Navbar></Navbar>
            </section>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;