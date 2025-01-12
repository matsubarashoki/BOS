import { ColDef } from "ag-grid-community";
import { KPIGridRow } from "../../utils/type/type";
// Column Definitions: Defines & controls grid columns.
export const KPIGridColDefs: ColDef<KPIGridRow>[] = [
  { field: "No", headerName: "No", width: 70, maxWidth: 70 },
  {
    field: "target_qualitative_category",
    headerName: "今期目標（定性）",
  },
  { field: "target_qualitative", headerName: "値" },
  {
    field: "target_quantitative_category",
    headerName: "今期目標（定量）",
  },
  { field: "target_quantitative", headerName: "値" },
];
