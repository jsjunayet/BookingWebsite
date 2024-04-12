import React from 'react';
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
const Dashboard = () => {
    return (
        <div>
            <h1>hello dashboard</h1>
            <Link to={"/home"}>dashboard Home</Link>
            <Routes>
                <Route path='/home' element={<DashboardHome></DashboardHome>}></Route>
            </Routes>
        </div>
    );
};

export default Dashboard;