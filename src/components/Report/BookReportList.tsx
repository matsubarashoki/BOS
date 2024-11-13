import { Box, Container, Paper } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import useReportStore from "../../store/reportStore";
import { reportsColumns } from "./ReportsListGridColDef";

const BookReportList = () => {
  const { reports } = useReportStore();
  return (
    <Container maxWidth={false}>
      <Box sx={{ padding: 2, width: "100%" }}>
        <Paper sx={{ height: 500, width: "100%", bgcolor: "#fff" }}>
          <DataGrid
            rows={reports}
            columns={reportsColumns}
            pageSizeOptions={[5, 10]}
            getRowId={(row) => row.reportId}
            slots={{ toolbar: GridToolbar }}
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default BookReportList;
