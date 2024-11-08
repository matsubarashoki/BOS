import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import { ReportFormSchema } from "../../utils/zodSchema/reportForm";

interface ReportFormProps {
  formTitle: string;
  fields: {
    name: keyof ReportFormSchema;
    label: string;
    type?: string;
    multiline?: boolean;
    rows?: number;
  }[];
  control: Control<ReportFormSchema>;
  errors: FieldErrors<ReportFormSchema>;
  submit: (data: ReportFormSchema) => void;
  handleSubmit: UseFormHandleSubmit<ReportFormSchema>;
}

const ReportForm: React.FC<ReportFormProps> = ({
  formTitle,
  fields,
  control,
  errors,
  submit,
  handleSubmit,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submit)}
      sx={{ p: 3, maxWidth: 600, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        {formTitle}
      </Typography>

      {fields.map((field) => (
        <Controller
          key={field.name}
          name={field.name}
          control={control}
          render={({ field: controllerField }) => (
            <TextField
              {...controllerField}
              label={field.label}
              type={field.type || "text"}
              variant="outlined"
              fullWidth
              margin="normal"
              multiline={field.multiline || false}
              rows={field.rows || 1}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
            />
          )}
        />
      ))}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        提出
      </Button>
    </Box>
  );
};

export default ReportForm;
