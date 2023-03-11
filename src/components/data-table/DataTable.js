import * as React from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import MUIDataTable from "mui-datatables";
// import Box from "@mui/material/Box";
// import ButtonComponent from "../button/ButtonComponent";
// import { FiChevronRight } from '../../../node_modules/react-icons/fi/index.esm';
import "./DataTable.css"



// const columns = [
//   {
//     field: "id",
//     headerName: "ID",
//     width: 5,
//     headerClassName: "super-app-theme--header",
//     renderCell: () => {
//         return (
//           <div>
//             <ButtonComponent label={<FiChevronRight />} buttonBackgroundColor={"red"} buttonColor="white" />
//           </div>
//         );
//       },
//   },
//   {
//     field: "Account No",
//     headerName: "Account No",
//     width: 200,
//     headerClassName: "super-app-theme--header",
//   },
//   {
//     field: "Name",
//     headerName: "Name",
//     width: 200,
//     headerClassName: "super-app-theme--header",
//   },
//   {
//     field: "Reference Number",
//     headerName: "Ref No",
//     type: "number",
//     width: 150,
//     headerClassName: "super-app-theme--header",
//     renderCell: () => {
//       return (
//         <div>
//           <ButtonComponent label="Next" buttonBackgroundColor={"orange"} buttonColor="white" />
//         </div>
//       );
//     },
//   },
//   {
//     field: "Narration",
//     headerName: "Narration",
//     width: 200,
//     headerClassName: "super-app-theme--header",
//   },
//   {
//     field: "Amount Debited",
//     headerName: "Amount Db",
//     width: 134.5,
//     headerClassName: "super-app-theme--header",
//   },
//   {
//     field: "Amount Credited",
//     headerName: "Amount Cr",
//     width: 134.5,
//     headerClassName: "super-app-theme--header",
//   },
//   {
//     field: "Branch",
//     headerName: "Branch",
//     width: 134.5,
//     headerClassName: "super-app-theme--header",
//   },
//   {
//     field: "Transaction Number",
//     headerName: "Trans No",
//     width: 134.5,
//     headerClassName: "super-app-theme--header",
//   },
  
//   // {
//   //   field: "fullName",
//   //   headerName: "Full name",
//   //   description: "This column has a value getter and is not sortable.",
//   //   sortable: false,
//   //   headerClassName: "super-app-theme--header",
//   //   width: 160,
//   //   valueGetter: (params) =>
//   //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   // },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function DataTable({ headerColor, headerText ,tableTitleColor,tableTitle,tableTitleBackgroundColor}) {
//   return (
//     <div style={{ height: "auto", width: "100%"}} className="div_div">
//       <Box
//       className="box_container"
//         sx={{
//           // backgroundColor:"#84c4d1",
//           height: "500px",
//           width: "97.1%",
//           marginLeft: "20px",
//           paddingBottom: "30px",
//           "& .super-app-theme--header": {
//             backgroundColor: `${headerColor}`,
//             color:`${headerText}`,
//             fontWeight: "800",
//           },
//         }}
//       >
//       <div className="table_title_header" style={{fontSize:"100%",fontWeight:"bold",height:"40px",display:"flex",justifyContent:"center",alignItems:"center", color:tableTitleColor,backgroundColor:tableTitleBackgroundColor}}>{tableTitle}</div>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </div>
//   );
// }



function DataTable({ title, data, columns, rowsPerPage }) {
  const options = {
    filterType: "checkbox",
    rowsPerPage: rowsPerPage, // rows to display per page
  };
  return (
    <div>
      <MUIDataTable
        title={title}
        data={data} // example: ["James Houston", "Test Corp", "Dallas", "TX"],
        columns={columns} // example: ["Name", "Company", "City", "State"]
        options={options}
      />
    </div>
  );
}

export default DataTable;