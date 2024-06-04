import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Dashboard/components/sidebar/Sidebar';


const Dashboard = () => {
    return (
        <div className='flex gap-2'>
            
            <Outlet />
        </div>
    );
};

export default Dashboard;
