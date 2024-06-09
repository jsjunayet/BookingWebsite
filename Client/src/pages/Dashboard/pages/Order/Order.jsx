import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';

const Order = ({colums}) => {
    return (
        <div className="flex w-full">
        <Sidebar />
        <div className="flex-6">
          <Navbar />
          <Datatable colums={colums} />
        </div>
      </div>
    );
};

export default Order;