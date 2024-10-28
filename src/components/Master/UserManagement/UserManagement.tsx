import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { DataGrid, GridRowSelectionModel, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { userDefoValue } from "../../../utils/initialValues/initialValues";
import { testUsers } from "../../../utils/mock/Users";
import { userType } from "../../../utils/type/type";
import {
  userFormSchema,
  UserFormSchema,
} from "../../../utils/zodSchema/userForm";
import DialogModule from "../../Dialog";
import { userColumns } from "./UserGridColDef";
import "./userManagement.css";

const paginationModel = { page: 0, pageSize: 10 };

export default function UserManagement() {
  const [users, setUsers] = useState<userType[]>(testUsers);
  const [open, setOpen] = useState(false);
  const [deleteDialogpen, setDeleteDialogpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [selectedRows, setSelectedRows] = useState<userType[]>([]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<UserFormSchema>({
    defaultValues: userDefoValue,
    resolver: zodResolver(userFormSchema),
  });

  const handleOpen = (mode: string) => {
    // setFormData({ name: '' }); // フォームの初期化
    // setEditMode(false);
    setDialogTitle(mode);
    setOpen(true);
  };

  // ダイアログを閉じる
  const handleClose = () => {
    setOpen(false);
    setDeleteDialogpen(false);
  };

  // SnackBarを閉じる
  const handleSnackbarClose = () => {
    setSnackBarOpen(false);
  };

  // 選択した行データを保持
  const handleSelectionChange = (selectionModel: GridRowSelectionModel) => {
    const selectedData = users.filter((user) =>
      selectionModel.includes(user.userId as string)
    );
    setSelectedRows(selectedData);
  };

  // 編集処理
  const handleEdit = () => {
    if (selectedRows.length === 1) {
      const row = selectedRows[0];
      setValue("userId", row.userId);
      setValue("lastName", row.lastName);
      setValue("firstName", row.firstName);
      setValue("lastNameKane", row.lastNameKane);
      setValue("firstNameKana", row.firstNameKana);
      setValue("romanName", row.romanName);
      setValue("dateOfBirth", row.dateOfBirth);
      setValue("age", row.age);
      setValue("dateOfEmployment", row.dateOfEmployment);
      setValue("email", row.email);
      setValue("phone", row.phone);
      setValue("department", row.department);
      setValue("position", row.position);
      setValue("nearestStation", row.nearestStation);
      handleOpen("Edit");
    } else if (selectedRows.length === 0) {
      setSnackBarOpen(true);
      setSnackBarMessage("Userが複数選択されています。");
    } else {
      setSnackBarOpen(true);
      setSnackBarMessage("Userが選択されていません");
    }
  };

  const onSubmit: SubmitHandler<UserFormSchema> = async (data) => {
    // フォームデータを送信する処理をここに追加(まだモックに追加のみ)
    const maxId = testUsers.reduce((max, user) => {
      const userId = user.userId ? Number(user.userId) : 0; // nullチェックを含めて変換
      return userId > max ? userId : max;
    }, 0);
    console.log(maxId + 1);
    const newUser: userType = { ...data, userId: String(maxId + 1) };
    console.log(newUser);
    setUsers((prevState) => [...prevState, newUser]);
    reset();
    handleClose();
  };

  // Delete処理
  const handleDelete = () => {
    const selectedUserIds = selectedRows.map((row) => {
      return row.userId;
    });
    const deletedUsers = users.filter(
      (user) => !selectedUserIds.includes(user.userId)
    );
    setUsers(deletedUsers);
    handleClose();
  };

  const userForm = (
    <Grid container spacing={2}>
      <Grid size={12} sx={{ display: "flex" }}>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="姓"
                type="text"
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="名"
                type="text"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
      </Grid>
      <Grid size={12} sx={{ display: "flex" }}>
        <Controller
          name="lastNameKane"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="姓カナ"
                type="text"
                fullWidth
                error={!!errors.lastNameKane}
                helperText={errors.lastNameKane?.message}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
        <Controller
          name="firstNameKana"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="名カナ"
                type="text"
                fullWidth
                error={!!errors.firstNameKana}
                helperText={errors.firstNameKana?.message}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
      </Grid>
      <Controller
        name="romanName"
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="ローマ字名"
              type="text"
              fullWidth
              error={!!errors.romanName}
              helperText={errors.romanName?.message}
              margin="normal"
              sx={{ paddingX: 1 }}
            />
          );
        }}
      />
      <Grid size={12} sx={{ display: "flex" }}>
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="生年月日"
                type="date"
                error={!!errors.dateOfBirth}
                helperText={errors.dateOfBirth?.message}
                InputLabelProps={{ shrink: true }}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="年齢"
                type="number"
                error={!!errors.age}
                helperText={errors.age?.message}
                margin="normal"
                value={field.value === 0 ? "" : field.value}
                sx={{ paddingX: 1 }}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value, 10) || 0;
                  field.onChange(newValue);
                }}
              />
            );
          }}
        />
        <Controller
          name="dateOfEmployment"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="入社日"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.dateOfEmployment}
                helperText={errors.dateOfEmployment?.message}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
      </Grid>
      <Grid size={12} sx={{ display: "flex" }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="email"
                type="email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
      </Grid>
      <Grid size={12} sx={{ display: "flex" }}>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="phone"
                type="phone"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
      </Grid>
      <Controller
        name="department"
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="部署"
              type="text"
              fullWidth
              error={!!errors.department}
              helperText={errors.department?.message}
              margin="normal"
              sx={{ paddingX: 1 }}
            />
          );
        }}
      />
      <Grid size={12} sx={{ display: "flex" }}>
        <Controller
          name="position"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="役職"
                type="text"
                fullWidth
                error={!!errors.position}
                helperText={errors.position?.message}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
        <Controller
          name="nearestStation"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                label="最寄り駅"
                type="text"
                fullWidth
                error={!!errors.nearestStation}
                helperText={errors.nearestStation?.message}
                margin="normal"
                sx={{ paddingX: 1 }}
              />
            );
          }}
        />
      </Grid>
    </Grid>
  );

  return (
    <>
      <Container
        maxWidth={false}
        className="userManagement-container"
        sx={{ padding: 2 }}
      >
        <Box className="userManagement-box" sx={{ padding: 2, width: "100%" }}>
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
              onClick={() => handleOpen("add")}
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
              onClick={() => handleEdit()}
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
              onClick={() => {
                if (selectedRows.length !== 0) {
                  setDeleteDialogpen(true);
                } else {
                  setSnackBarOpen(true);
                  setSnackBarMessage("Userが選択されていません");
                }
              }}
            >
              Delete
            </Button>
          </Box>

          <Paper sx={{ height: 500, width: "100%", bgcolor: "#fff" }}>
            <DataGrid
              rows={users}
              columns={userColumns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              getRowId={(row) => row.userId}
              onRowSelectionModelChange={handleSelectionChange}
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
      {/* Add or Updateダイアログ */}
      <DialogModule
        open={open}
        onClose={handleClose}
        title={dialogTitle}
        onSubmit={handleSubmit(onSubmit)}
      >
        {userForm}
      </DialogModule>
      {/* Delete ダイアログ */}
      <DialogModule
        open={deleteDialogpen}
        onClose={handleClose}
        title={"Delete Confirm"}
        onSubmit={() => handleDelete()}
      >
        <Box>削除してよろしいですか？</Box>
      </DialogModule>
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={1500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ width: "100%" }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
