import { ColDef } from "ag-grid-community";
import { monthlyScheduleGridRow } from "../../utils/type/type";
// Column Definitions: Defines & controls grid columns.
export const MonthlyScheduleGridColDefs: ColDef<monthlyScheduleGridRow>[] = [
  { field: "No", headerName: "No", width: 70, maxWidth: 70, hide: true },
  { field: "month", headerName: "月", width: 100, maxWidth: 100 },
  { field: "contents", headerName: "スケジュール" },
];
