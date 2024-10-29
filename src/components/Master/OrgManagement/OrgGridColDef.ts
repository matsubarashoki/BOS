import { GridColDef } from "@mui/x-data-grid";

export const orgColumns: GridColDef[] = [
  {
    field: "orgId",
    headerName: "ID",
    width: 50,
    type: "string",
  },
  {
    field: "parentId",
    headerName: "親ID",
    width: 50,
  },
  {
    field: "level",
    headerName: "階層レベル",
    width: 50,
  },
  {
    field: "Name",
    headerName: "組織名",
    width: 100,
  },
]