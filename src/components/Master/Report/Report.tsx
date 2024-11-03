import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReportsArray } from "../../../utils/mock/ReportsArray";

const ReportCard = styled(Card)(() => ({
  width: "100%",
  height: "100px",
  bgcolor: "#fff",
  transition: "none",
  "&:hover": { transition: "none" },
}));

const ReportButton = styled(Button)(() => ({
  margin: 1,
  fontSize: "20px",
  fontFamily: "Noto Sans JP, sans-serif",
  minWidth: "40px",
  height: "40px",
  borderRadius: "25%",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
}));

const Report = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleCreate = (reportType: string) => {
    const path = "/report/" + reportType;
    navigate(path);
  };

  return (
    <Container className="report-container" sx={{ paddingY: 2 }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={1}
        flexGrow={1}
        minHeight={"calc(100vh - 200px)"}
      >
        {ReportsArray.map((reports) => (
          <ReportCard
            sx={{
              margin: 2,
              border: "1px solid",
              borderColor: theme.palette.primary.main,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                transform: "none",
              }}
            >
              <Box>
                <Typography variant="h5" component="div" fontWeight={"bold"}>
                  {reports.reportsName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <ReportButton
                  variant="outlined"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                  }}
                  onClick={() => handleCreate(reports.reportType)}
                >
                  作成
                </ReportButton>
                <ReportButton
                  variant="outlined"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                  }}
                >
                  確認
                </ReportButton>
              </Box>
            </CardContent>
          </ReportCard>
        ))}
      </Box>
    </Container>
  );
};

export default Report;
