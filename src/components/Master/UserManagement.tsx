import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import "./userManagement.css";
import DialogModule from "../Dialog";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, headerClassName: "grid-header" },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    headerClassName: "grid-header",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    headerClassName: "grid-header",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    headerClassName: "grid-header",
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

const paginationModel = { page: 0, pageSize: 5 };

export default function UserManagement() {
  const [open, setOpen] = useState(false);

  const handleOpen = (mode: String) => {
    // setFormData({ name: '' }); // フォームの初期化
    // setEditMode(false);
    setOpen(true);
  };

  // ダイアログを閉じる
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container
        maxWidth={false}
        className="userManagement-container"
        sx={{ padding: 3 }}
      >
        <Box className="userManagement-box" sx={{ padding: 3, width: "100%" }}>
          <Box
            className="userManagement-itemBox"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              padding: 1,
            }}
          >
            <Button
              sx={{
                bgcolor: "#fff",
                borderRadius: "10%",
                border: "solid",
                marginX: 0.5,
              }}
              onClick={(e) => handleOpen("add")}
            >
              Add
            </Button>
            <Button
              sx={{
                bgcolor: "#fff",
                borderRadius: "10%",
                border: "solid",
                marginX: 0.5,
              }}
            >
              Edit
            </Button>
            <Button
              sx={{
                bgcolor: "#fff",
                borderRadius: "10%",
                border: "solid",
                marginX: 0.5,
              }}
            >
              Delete
            </Button>
          </Box>

          <Paper sx={{ height: 400, width: "100%", bgcolor: "#fff" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              slots={{ toolbar: GridToolbar }}
              sx={{
                "&.MuiDataGrid-root": {
                  border: "none",
                },
              }}
            />
          </Paper>
        </Box>
      </Container>
      {/* ダイアログ */}
      <DialogModule open={open} onClose={handleClose} title="Form Dialog" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      </DialogModule>



    </>
  );
}