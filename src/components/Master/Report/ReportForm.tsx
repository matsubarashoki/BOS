import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { reportDefoValue } from "../../../utils/initialValues/initialValues";
import {
  reportFormSchema,
  ReportFormSchema,
} from "../../../utils/zodSchema/reportForm";

interface ReportFormProps {
  formTitle: string;
}

const ReportForm: React.FC<ReportFormProps> = ({ formTitle }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReportFormSchema>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: reportDefoValue,
  });

  const onSubmit = (data: ReportFormSchema) => {
    console.log("フォームデータ:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: 3, maxWidth: 600, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        {formTitle}
      </Typography>

      {/* タイトル入力欄 */}
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="タイトル"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.title}
            helperText={errors.title?.message}
          />
        )}
      />

      {/* 提出日 */}
      <Controller
        name="submissionDate"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="提出日"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            error={!!errors.submissionDate}
            helperText={errors.submissionDate?.message}
          />
        )}
      />

      {/* 入力テキストエリア欄 */}
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="入力テキスト"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            error={!!errors.content}
            helperText={errors.content?.message || `${field.value.length}/1500`}
            inputProps={{ maxLength: 1500 }}
          />
        )}
      />

      {/* 宛先入力欄 */}
      <Controller
        name="reporter"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="宛先"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.reporter}
            helperText={errors.reporter?.message}
          />
        )}
      />

      {/* 宛先入力欄 */}
      <Controller
        name="recipient"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="宛先"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.recipient}
            helperText={errors.recipient?.message}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        提出
      </Button>
    </Box>
  );
};

export default ReportForm;
