// Theme
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
// React Grid Logic
import "ag-grid-community/styles/ag-grid.css";
// Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";

type BaseGridProps<T> = {
  rowData: T[];
  colDefs: ColDef<T>[];
};

// Create new GridExample component
export const BaseGrid = <T,>({ rowData, colDefs }: BaseGridProps<T>) => {
  const defaultColDef: ColDef = {
    flex: 1,
    editable: true,
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
