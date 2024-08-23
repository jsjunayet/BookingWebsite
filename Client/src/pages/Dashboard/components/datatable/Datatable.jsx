import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {  userColumns } from '../../datatablesource';
import useFetch from "../../../../Hook/useFetch"
import axios from 'axios';
const Datatable = ({colums}) => {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
const [List,setList]=useState([])
const {data:datas, loading, error, refetch}= useFetch(`https://bookingwebsite-2.onrender.com/api/${path}`)
console.log(datas.isAdmin)
useEffect(()=>{
  setList(datas)
},[datas])
const handleToggleRole = async (id, currentRole) => {
  try {
    const newRole = !currentRole; // Toggle the role
    const res = await axios.patch(`https://bookingwebsite-2.onrender.com/api/${path}/admin/${id}`, { isAdmin: newRole });
    setList((prevList) => 
      prevList.map((item) => (item._id === id ? { ...item, isAdmin: newRole } : item))
    );
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

  const handleDelete = async(id) => {
    try{
      await axios.delete(`https://bookingwebsite-2.onrender.com/api/${path}/${id}`)
      setList(List.filter((item) => item._id !== id));
    }catch(err){
      console.log(err.message)
    }
    
  };
  const rowsWithSequentialIDs = List.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-5">
            <Link to="/dashboard/users/:userId" className="text-blue-500 hover:underline">
              View
            </Link>
            <div
              className="text-red-500 cursor-pointer"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
            {
              params?.row?.password
              && <div
              className="text-green-500 cursor-pointer"
              onClick={() => handleToggleRole(params.row._id, params.row.isAdmin)}
            >
              {params?.row?.isAdmin?"Admin":"user"}
            </div>
            }
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg-white shadow-md p-5 h-600">
      <div className="flex items-center justify-between mb-5">
        <div className="text-gray-500 text-2xl uppercase">{path}</div>
        <Link to={`/dashboard/${path}/new`} className="text-green-500 hover:bg-green-100 py-2 px-4 rounded-md">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rowsWithSequentialIDs}
        columns={colums.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  );
};

export default Datatable;
