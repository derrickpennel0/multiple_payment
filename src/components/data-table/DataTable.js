import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ButtonComponent from "../button/ButtonComponent";
import { FiChevronRight } from '../../../node_modules/react-icons/fi/index.esm';

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    headerClassName: "super-app-theme--header",
    renderCell: () => {
        return (
          <div>
            <ButtonComponent label={<FiChevronRight />} buttonBackgroundColor={"red"} buttonColor="white" />
          </div>
        );
      },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 330,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 230,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    headerClassName: "super-app-theme--header",
    renderCell: () => {
      return (
        <div>
          <ButtonComponent label="Next" buttonBackgroundColor={"orange"} buttonColor="white" />
        </div>
      );
    },
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    headerClassName: "super-app-theme--header",
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable({ headerColor, headerText }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Box
        sx={{
          height: "500px",
          width: "97.1%",
          marginLeft: "20px",
          paddingBottom: "30px",
          "& .super-app-theme--header": {
            backgroundColor: `${headerColor}`,
            color:`${headerText}`,
            fontWeight: "800",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
}
