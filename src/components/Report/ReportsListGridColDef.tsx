import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const reportsColumns: GridColDef[] = [
  {
    field: "reportId",
    headerName: "ID",
    width: 50,
    type: "string",
  }, 
  {
    field: "reportTitle",
    headerName: "ReportType",
    width: 200,
  },
 
  {
    field: "title",
    headerName: "タイトル",
    width: 200,
  },
  {
    field: "submissionDate",
    headerName: "提出日",
    width: 120,
  },
  {
    field: "reporter",
    headerName: "報告者",
    width: 150,
  },
  {
    field: "editBtn",
    headerName: "詳細",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <Button variant="contained" color="primary">
        詳細
      </Button>
    ),
  },
];
