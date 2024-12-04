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
import useManagementPlanStore from "../../store/managementPlanStore";
import { ActionPlanGridColDefs } from "./ActionPlanGridColDefs";
import { BaseGrid } from "./BaseGrid";
import { KPIGridColDefs } from "./KPIGridColDefs";

const ManagementPlanCreate = () => {
  const { managementPlan, updateManagementPlan } = useManagementPlanStore();

  const StyledBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "100%",
    margin: "8px",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "8px",
  }));

  return (
    <Container
      id="create-container"
      sx={{ my: 2, alignItems: "center", py: 1 }}
    >
      <StyledBox sx={{ bgcolor: "#fff", width: "20%" }}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <InputLabel htmlFor="custom-input">Term </InputLabel>
        </Box>
        {/* <MonthSelector /> */}
        <TextField
          id="term"
          value={managementPlan.term}
          onChange={(e) =>
            updateManagementPlan({ ...managementPlan, term: e.target.value })
          }
        />
      </StyledBox>
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

        <TextField
          rows={3}
          multiline
          id="managementPhilosophy"
          value={managementPlan.managementPhilosophy}
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

        <TextField
          rows={3}
          multiline
          id="mission"
          value={managementPlan.mission}
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

        <TextField
          rows={3}
          multiline
          id="guidingPrinciple"
          value={managementPlan.guidingPrinciple}
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

        <TextField
          rows={3}
          multiline
          id="managementVision"
          value={managementPlan.managementVision}
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
        <BaseGrid rowData={managementPlan.kpi} colDefs={KPIGridColDefs} />
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
          rowData={managementPlan.actionPlan}
          colDefs={ActionPlanGridColDefs}
        />
      </StyledBox>
    </Container>
  );
};

export default ManagementPlanCreate;
