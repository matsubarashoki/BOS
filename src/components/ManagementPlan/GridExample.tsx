// Theme
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
// React Grid Logic
import "ag-grid-community/styles/ag-grid.css";
// Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";

// Row Data Interface
interface IRow {
  target_qualitative_category: string;
  target_qualitative: string;
  target_quantitative_category: string;
  target_quantitative: string;
}

// Create new GridExample component
export const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([
    {
      target_qualitative_category: "test",
      target_qualitative: "test",
      target_quantitative_category: "test",
      target_quantitative: "test",
    },
    {
      target_qualitative_category: "test",
      target_qualitative: "test",
      target_quantitative_category: "test",
      target_quantitative: "test",
    },
    {
      target_qualitative_category: "test",
      target_qualitative: "test",
      target_quantitative_category: "test",
      target_quantitative: "test",
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "target_qualitative_category", headerName: "今期目標（定性）" },
    { field: "target_qualitative", headerName: "値" },
    { field: "target_quantitative_category", headerName: "今期目標（定量）" },
    { field: "target_quantitative", headerName: "値" },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};
