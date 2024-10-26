import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
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
  const [dialogTitle, setDialogTitle] = useState<String>("");

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserFormSchema>({
    defaultValues: userDefoValue,
    resolver: zodResolver(userFormSchema),
  });

  const handleOpen = (mode: String) => {
    // setFormData({ name: '' }); // フォームの初期化
    // setEditMode(false);
    setDialogTitle(mode);
    setOpen(true);
  };

  // ダイアログを閉じる
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<UserFormSchema> = async (data) => {
    // フォームデータを送信する処理をここに追加(まだモックに追加のみ)
    const maxId = testUsers.reduce((max, user) => {
      const userId = user.id ? Number(user.id) : 0; // nullチェックを含めて変換
      return userId > max ? userId : max;
    }, 0);
    const newUser: userType = { id: String(maxId + 1), ...data };
    setUsers((prevState) => [...prevState, newUser]);
    reset();
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
                label="mail"
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
                label="phone-number"
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

          <Paper sx={{ height: 500, width: "100%", bgcolor: "#fff" }}>
            <DataGrid
              rows={users}
              columns={userColumns}
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
      <DialogModule
        open={open}
        onClose={handleClose}
        title="Form Dialog"
        onSubmit={handleSubmit(onSubmit)}
      >
        {userForm}
      </DialogModule>
    </>
  );
}
