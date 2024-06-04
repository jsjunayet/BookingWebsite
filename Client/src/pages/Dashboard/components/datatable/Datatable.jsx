import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userRows, userColumns } from '../../datatablesource';
const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg-white shadow-md p-5 h-600">
      <div className="flex items-center justify-between mb-5">
        <div className="text-gray-500 text-2xl">Add New User</div>
        <Link to="/dashboard/users/new" className="text-green-500 hover:bg-green-100 py-2 px-4 rounded-md">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
