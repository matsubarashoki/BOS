import React, { useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const CustomDateFilter = ({ filterChangedCallback }: any) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const onDateChange = useCallback(
        (date: Date | null) => {
            setSelectedDate(date);
            filterChangedCallback(); // フィルターが変更されたことを通知
        },
        [filterChangedCallback]
    );

    const doesFilterPass = ({ data }: any) => {
        if (!selectedDate) return true;
        const cellValue = new Date(data.date); // 日付カラムの値
        return cellValue.toDateString() === selectedDate.toDateString();
    };

    const isFilterActive = () => selectedDate !== null;

    const getModel = () => (selectedDate ? { date: selectedDate } : null);

    const setModel = (model: any) => {
        setSelectedDate(model ? model.date : null);
    };

    return (
        <Grid container>
            <DatePicker
                label="Filter by Date"
                value={selectedDate}
                onChange={onDateChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
            />
        </Grid>
    );
};

const Test = () => {
    const [rowData] = useState([
        { id: 1, name: "John Doe", date: "2024-11-10" },
        { id: 2, name: "Jane Smith", date: "2024-11-12" },
        { id: 3, name: "Sam Green", date: "2024-11-15" },
    ]);

    const [columnDefs] = useState([
        { field: "id" },
        { field: "name" },
        {
            field: "date",
            filter: true,
            filterFramework: CustomDateFilter, // カスタムフィルター
        },
    ]);

    const defaultColDef = {
        filter: true, // 全カラムにフィルターを有効化
        sortable: true,
    };

    const sideBar = {
        toolPanels: [
            {
                id: "filters",
                labelDefault: "Filters",
                labelKey: "filters",
                iconKey: "filter",
                toolPanel: "agFiltersToolPanel",
            },
        ],
        defaultToolPanel: "filters", // デフォルトでフィルターパネルを表示
    };

    return (
        <div className="ag-theme-alpine" style={{ height: 500, width: 800 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                sideBar={sideBar} // サイドバーを有効化
            />
        </div>
    );
};

export default Test;

