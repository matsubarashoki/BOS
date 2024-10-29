import { GridColDef } from "@mui/x-data-grid";

export const orgColumns: GridColDef[] = [
  {
    field: "orgId",
    headerName: "ID",
    width: 50,
    type: "string",
    flex: 1,
  },
  {
    field: "parentId",
    headerName: "親ID",
    width: 50,
    flex: 1,
  },
  {
    field: "level",
    headerName: "階層レベル",
    width: 50,
    flex: 1,
  },
  {
    field: "Name",
    headerName: "組織名",
    width: 100,
    flex: 3,
  },
  {
    field: "createBy",
    headerName: "作成日",
    width: 100,
    flex: 1,
  },
];
