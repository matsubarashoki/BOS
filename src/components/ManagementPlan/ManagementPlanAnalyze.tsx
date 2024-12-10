import { Box, Container } from "@mui/material";
import BarChart from "./BarChart";
import CategoryChart from "./CategoryChart";
import { LineChart } from "./LineChart";

const ManagementPlanAnalyze = () => {
  return (
    <Container sx={{ overflowY: "auto", py: 3 }}>
      <Box sx={{ p: 3 }}>
        <BarChart />
      </Box>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ justifyContent: "flex-start", width: "100%" }}>
          <CategoryChart />
        </Box>
        <Box
          sx={{
            justifyContent: "flex-end",
            textAlign: "center",
            width: "100%",
          }}
        >
          <LineChart />
        </Box>
      </Box>
    </Container>
  );
};

export default ManagementPlanAnalyze;
