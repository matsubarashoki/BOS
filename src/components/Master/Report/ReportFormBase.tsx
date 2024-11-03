import { Box, Container } from "@mui/material";
import ReportForm from "./ReportForm";

interface ReportFormProps {
  formTitle: string;
}

const ReportFormBase: React.FC<ReportFormProps> = ({ formTitle }) => {
  return (
    <Container sx={{ paddingY: 2 }}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{
          width: "80%", // Boxの幅をContainerの80%に設定
          maxWidth: 500, // 必要に応じて最大幅を指定
          margin: "0 auto", // 中央揃え
          padding: 2, // 内側の余白
          bgcolor: "#fff",
        }}
      >
        <ReportForm formTitle={formTitle} />
      </Box>
    </Container>
  );
};

export default ReportFormBase;
