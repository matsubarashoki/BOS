import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { UserFormSchema } from "../../../utils/zodSchema/userForm";
import "./userManagement.css";

interface UserFormProps {
  control: Control<UserFormSchema>;
  errors: FieldErrors<UserFormSchema>;
}

const UserForm: React.FC<UserFormProps> = ({ control, errors }) => (
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

export default UserForm;
