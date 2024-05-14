import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../Components/Footer';
import Header from '../Components/Header';
import UseContext from '../Hooks/UseContext';

const Main = () => {
    const {loading} = UseContext()
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600 mx-auto mt-10"></div>
    }

    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;