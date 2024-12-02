import ClearIcon from "@mui/icons-material/Clear";
import HelpIcon from "@mui/icons-material/Help";
import {
  Box,
  Container,
  IconButton,
  InputLabel,
  Paper,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { GridExample } from "./GridExample";
import MonthSelector from "./MonthSelector";

const ManagementPlanCreate = () => {
  const StyledBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "100%",
    // margin: "0 auto",
    margin: "8px",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "8px",
  }));

  // Row Data Interface
  interface IRow {
    target_qualitative: string;
    target_quantitative: string;
  }
  const [rowData, setRowData] = useState<IRow[]>([
    { target_qualitative: "test", target_quantitative: "test" },
    { target_qualitative: "", target_quantitative: "" },
    { target_qualitative: "", target_quantitative: "" },
  ]);

  // const [columnDefs, setColumnDefs] = useState<
  //   (ColDef<IRow, any> | ColGroupDef<any>)[]
  // >([
  //   { field: "target_qualitative", headerName: "今期目標（定性）" },
  //   { field: "target_quantitative", headerName: "今期目標（定量）" },
  // ]);

  // const defaultColDef: ColDef = {
  //   flex: 1,
  // };

  // const gridOptions: GridOptions = {
  //   defaultColDef: {
  //     editable: true,
  //   },
  //   onCellValueChanged: (event: CellValueChangedEvent) => {
  //     console.log(`New Cell Value: ${event.value}`);
  //   },
  // };
  return (
    <Container id="create-container" sx={{ my: 2, alignItems: "center" }}>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        sx={{ paddingLeft: 0 }}
      >
        <MonthSelector />
      </Box>
      <StyledBox sx={{ bgcolor: "#fff" }}>
        {/* InputLabel */}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <InputLabel htmlFor="custom-input">経営理念 </InputLabel>
          <Box>
            <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
              <Tooltip title={"経営理念とは"}>
                <HelpIcon />
              </Tooltip>
            </IconButton>
            <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
              <ClearIcon />
            </IconButton>
          </Box>
        </Box>
        {/* TextField */}
        <TextField
          rows={3}
          multiline
          id="custom-input"
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          variant="outlined"
        />
      </StyledBox>

      <StyledBox sx={{ bgcolor: "#fff" }}>
        {/* InputLabel */}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <InputLabel htmlFor="custom-input">ミッション </InputLabel>
          <Box>
            <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
              <Tooltip title={"ミッションとは"}>
                <HelpIcon />
              </Tooltip>
            </IconButton>
            <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
              <ClearIcon />
            </IconButton>
          </Box>
        </Box>
        {/* TextField */}
        <TextField
          rows={3}
          multiline
          id="custom-input"
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          variant="outlined"
        />
      </StyledBox>

      <StyledBox sx={{ bgcolor: "#fff" }}>
        {/* InputLabel */}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <InputLabel htmlFor="custom-input">経営指針 </InputLabel>
          <Box>
            <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
              <Tooltip title={"経営指針とは"}>
                <HelpIcon />
              </Tooltip>
            </IconButton>
            <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
              <ClearIcon />
            </IconButton>
          </Box>
        </Box>
        {/* TextField */}
        <TextField
          rows={3}
          multiline
          id="custom-input"
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          variant="outlined"
        />
      </StyledBox>

      <StyledBox sx={{ bgcolor: "#fff" }}>
        {/* InputLabel */}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <InputLabel htmlFor="custom-input">経営ビジョン </InputLabel>
          <Box>
            <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
              <Tooltip title={"経営理念とは"}>
                <HelpIcon />
              </Tooltip>
            </IconButton>
            <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
              <ClearIcon />
            </IconButton>
          </Box>
        </Box>
        {/* TextField */}
        <TextField
          rows={3}
          multiline
          id="custom-input"
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          variant="outlined"
        />
      </StyledBox>

      <Box sx={{ padding: 2, width: "100%" }}>
        <Paper sx={{ height: 500, width: "100%", bgcolor: "#fff" }}>
          <Typography
            variant="h5"
            component={"h4"}
            sx={{ marginY: 1, paddingLeft: 1 }}
          >
            KPI Grid
          </Typography>

          <div
            className="ag-theme-quartz" // applying the Data Grid theme
            style={{ width: "100%", height: "100%" }}
          >
            <GridExample />
          </div>
        </Paper>
      </Box>
    </Container>
  );
};

export default ManagementPlanCreate;
