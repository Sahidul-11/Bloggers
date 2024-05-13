import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../Components/Footer';
import Header from '../Components/Header';

const Main = () => {
    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;