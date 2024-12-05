import { zodResolver } from "@hookform/resolvers/zod";
import ClearIcon from "@mui/icons-material/Clear";
import HelpIcon from "@mui/icons-material/Help";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputLabel,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useManagementPlanStore from "../../store/managementPlanStore";
import { ActionPlanGridRowData } from "../../utils/mock/ActionPlanGridRowData";
import { KPIGridRowData } from "../../utils/mock/KPIGridRows";
import { ManagementPlanSchema } from "../../utils/zodSchema/managementPlanForm";
import { ActionPlanGridColDefs } from "./ActionPlanGridColDefs";
import { BaseGrid } from "./BaseGrid";
import { KPIGridColDefs } from "./KPIGridColDefs";

const ManagementPlanCreate = () => {
  const { managementPlan, updateManagementPlan } = useManagementPlanStore();
  const InitialManagementPlan = {
    term: null,
    managementPhilosophy: null,
    mission: null,
    guidingPrinciple: null,
    managementVision: null,
    kpi: [
      {
        target_qualitative_category: "",
        target_qualitative: "",
        target_quantitative_category: "",
        target_quantitative: "",
      },
    ],
    actionPlan: [
      {
        No: "",
        contents: "",
        period: "",
        remarks: "",
      },
    ],
  };

  // const handleManagementPlanItem = (
  //   field: keyof ManagementPlan,
  //   value: any
  // ) => {
  //   setLocalManagementPlan((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  // // 保存ボタンを押したときに Zustand ストアを更新
  // const handleSave = () => {
  //   updateManagementPlan(localManagementPlan);
  // };
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

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<ManagementPlanSchema>({
    defaultValues: managementPlan,
    resolver: zodResolver(ManagementPlanSchema),
  });

  const onSubmit: SubmitHandler<ManagementPlanSchema> = (data) => {
    console.log(data);
    updateManagementPlan(data);
  };

  return (
    <Container
      id="create-container"
      sx={{ my: 2, alignItems: "center", py: 1 }}
    >
      <Box component="form">
        <StyledBox sx={{ bgcolor: "#fff", width: "20%" }}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <InputLabel htmlFor="custom-input">Term </InputLabel>
          </Box>
          {/* <MonthSelector /> */}
          <Controller
            name={"term"}
            control={control}
            render={({ field: controllerField }) => (
              <TextField {...controllerField} type="text" />
            )}
          />
        </StyledBox>
        {/* <Box display={"flex"} justifyContent={"center"} mt={2}>
        <button onClick={handleSave}>保存</button>
      </Box> */}
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
        <Button onClick={handleSubmit(onSubmit)} color="primary">
          save
        </Button>
      </Box>
    </Container>
  );
};

export default ManagementPlanCreate;
