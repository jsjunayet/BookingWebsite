export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex item-center gap-2 ">
          <img className="w-10 h-10 rounded-full mt-1" src={params.row.ProfilePik || "https://i.ibb.co/RHSLGWS/download-1.png"} alt="avatar" />
          <span>{params.row.userName}</span>
        </div>
      );
    },
  },
  {
    field: "userEmail",
    headerName: "Email",
    width: 210,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
  
];
export const RoomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 210,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "MaxPeople",
    width: 150,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 150,
  },
  
];
export const hotelColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "title",
    headerName: "Title",
    width: 210,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },

  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 150,
  },
  
];
export const BookingColumns = [
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "RoomName",
    headerName: "RoomName",
    width: 150,
  },

  {
    field: "startDate",
    headerName: "startDate",
    width: 150,
    renderCell: (params) => {
      const date = params.value.split('T')[0];
      return <span>{date}</span>;
    },
  },

  {
    field: "endDate",
    headerName:"EndDate",
    width: 150,
    renderCell: (params) => {
      const date = params.value.split('T')[0];
      return <span>{date}</span>;
    },
  },
  {
    field:"selectedRoomNumbers",
    headerName: "RoomNumbers",
    width: 150,
  },
  {
    field:"price",
    headerName: "Price",
    width: 100,
  },
  
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
