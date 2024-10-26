import { GridColDef } from "@mui/x-data-grid";

export const userColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "姓",
    width: 100,
  },
  {
    field: "firstName",
    headerName: "名",
    width: 100,
  },
  {
    field: "lastNameKane",
    headerName: "姓（カナ）",
    width: 100,
  },
  {
    field: "firstNameKana",
    headerName: "名（カナ）",
    width: 100,
  },
  {
    field: "romanName",
    headerName: "ローマ字名",
    width: 150,
  },
  {
    field: "dateOfBirth",
    headerName: "生年月日",
    width: 150,
  },
  {
    field: "age",
    headerName: "年齢",
    width: 80,
    type: "number",
  },
  {
    field: "dateOfEmployment",
    headerName: "入社日",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    headerName: "電話番号",
    width: 150,
  },
  {
    field: "department",
    headerName: "部署",
    width: 150,
  },
  {
    field: "position",
    headerName: "役職",
    width: 150,
  },
  {
    field: "nearestStation",
    headerName: "最寄駅",
    width: 150,
  },
];
