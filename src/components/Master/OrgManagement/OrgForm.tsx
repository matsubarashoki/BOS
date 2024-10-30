import { Control, Controller, FieldErrors } from "react-hook-form";
import { OrgFormSchema } from "../../../utils/zodSchema/orgForm";

import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface OrgFormProps {
  control: Control<OrgFormSchema>;
  errors: FieldErrors<OrgFormSchema>;
}

export const OrgForm: React.FC<OrgFormProps> = ({ control, errors }) => (
  <Grid container spacing={2}>
    <Grid size={12} sx={{ display: "flex" }}>
      <Controller
        name="orgId"
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="組織ID"
              type="text"
              fullWidth
              error={!!errors.orgId}
              helperText={errors.orgId?.message}
              margin="normal"
              sx={{ paddingX: 1 }}
            />
          );
        }}
      />
      <Controller
        name="parentId"
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="親組織ID"
              type="text"
              fullWidth
              error={!!errors.parentId}
              helperText={errors.parentId?.message}
              margin="normal"
              sx={{ paddingX: 1 }}
            />
          );
        }}
      />
      <Controller
        name="level"
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="階層レベル"
              type="text"
              fullWidth
              error={!!errors.level}
              helperText={errors.level?.message}
              margin="normal"
              sx={{ paddingX: 1 }}
            />
          );
        }}
      />
    </Grid>
    <Grid size={12} sx={{ display: "flex" }}>
      <Controller
        name="Name"
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="組織名"
              type="text"
              fullWidth
              error={!!errors.Name}
              helperText={errors.Name?.message}
              margin="normal"
              sx={{ paddingX: 1 }}
            />
          );
        }}
      />
    </Grid>
    <Grid size={12} sx={{ display: "flex" }}>
      <Controller
        name="createBy"
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="登録日"
              type="date"
              error={!!errors.createBy}
              helperText={errors.createBy?.message}
              InputLabelProps={{ shrink: true }}
              margin="normal"
              sx={{ paddingX: 1 }}
            />
          );
        }}
      />
    </Grid>
  </Grid>
);
