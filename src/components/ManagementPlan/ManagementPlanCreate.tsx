import ClearIcon from "@mui/icons-material/Clear";
import HelpIcon from "@mui/icons-material/Help";
import {
  Box,
  Container,
  IconButton,
  InputLabel,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ActionPlanGridRowData } from "../../utils/mock/ActionPlanGridRowData";
import { KPIGridRowData } from "../../utils/mock/KPIGridRows";
import { ActionPlanGridColDefs } from "./ActionPlanGridColDefs";
import { BaseGrid } from "./BaseGrid";
import { KPIGridColDefs } from "./KPIGridColDefs";
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
    <Container
      id="create-container"
      sx={{ my: 2, alignItems: "center", py: 1 }}
    >
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

      <StyledBox sx={{ bgcolor: "#fff", height: 300 }}>
        <Typography
          variant="h5"
          component={"h4"}
          sx={{ marginY: 1, paddingLeft: 1 }}
        >
          KPI Grid
        </Typography>
        <BaseGrid rowData={KPIGridRowData} colDefs={KPIGridColDefs} />
      </StyledBox>

      <StyledBox sx={{ bgcolor: "#fff", height: 300 }}>
        <Typography
          variant="h5"
          component={"h4"}
          sx={{ marginY: 1, paddingLeft: 1 }}
        >
          アクションプラン
        </Typography>
        <BaseGrid
          rowData={ActionPlanGridRowData}
          colDefs={ActionPlanGridColDefs}
        />
      </StyledBox>
    </Container>
  );
};

export default ManagementPlanCreate;
