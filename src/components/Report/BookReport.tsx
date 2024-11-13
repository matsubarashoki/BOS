import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useReportStore from "../../store/reportStore";
import { reportDefoValue } from "../../utils/initialValues/initialValues";
import { ReportFields } from "../../utils/type/type";
import {
  ReportFormSchema,
  reportFormSchemas,
} from "../../utils/zodSchema/reportForm";
import ReportForm from "./ReportForm";

const BookReport = () => {
  const formTitle = "読書感想文";
  const { addReport } = useReportStore();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReportFormSchema>({
    resolver: zodResolver(reportFormSchemas.BookReport),
    defaultValues: reportDefoValue,
  });

  const onSubmit = (data: ReportFormSchema) => {
    console.log("フォームデータ:", data);
    // IdとreportTypeをschemaに追加
    // Listの汎用化
    addReport(data);
    navigate("/report");
  };

  const fields: ReportFields[] = [
    { name: "title", label: "タイトル" },
    { name: "bookTitle", label: "書籍名" },
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
          width: "100%",
          maxWidth: 600,
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

export default BookReport;
