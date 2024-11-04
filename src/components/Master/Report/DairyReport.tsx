import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { reportDefoValue } from "../../../utils/initialValues/initialValues";
import {
  ReportFormSchema,
  reportFormSchemas,
} from "../../../utils/zodSchema/reportForm";
import ReportForm from "./ReportForm";

const DairyReport = () => {
  const formTitle = "業務日報";
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReportFormSchema>({
    resolver: zodResolver(reportFormSchemas.DairyReport),
    defaultValues: reportDefoValue,
  });

  const onSubmit = (data: ReportFormSchema) => {
    console.log("フォームデータ:", data);
  };

  const fields = [
    { name: "title", label: "タイトル" },
    { name: "submissionDate", label: "提出日", type: "date" },
    { name: "content", label: "入力テキスト", multiline: true, rows: 4 },
    { name: "reporter", label: "報告者" },
    { name: "recipient", label: "宛先" },
  ];

  return (
    <Container sx={{ paddingY: 2 }}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{
          width: "80%",
          maxWidth: 500,
          margin: "0 auto",
          padding: 2,
          bgcolor: "#fff",
        }}
      >
        <ReportForm
          formTitle={formTitle}
          fields={fields}
          control={control}
          errors={errors}
          submit={onSubmit}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Container>
  );
};

export default DairyReport;
