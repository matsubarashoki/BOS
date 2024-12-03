import { ColDef } from "ag-grid-community";
import { ActionPlanGridRow } from "../../utils/type/type";
// Column Definitions: Defines & controls grid columns.
export const ActionPlanGridColDefs: ColDef<ActionPlanGridRow>[] = [
  { field: "No", headerName: "No" },
  { field: "contents", headerName: "内容" },
  { field: "period", headerName: "期間" },
  { field: "remarks", headerName: "備考" },
];
