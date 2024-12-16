import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  InputLabel,
  styled,
  TextField,
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

const ManagementPlanAssessment = () => {
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
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <StyledBox sx={{ bgcolor: "#fff", width: "20%" }}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <InputLabel htmlFor="custom-input">Term</InputLabel>
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
          <Button onClick={handleSubmit(onSubmit)} color="primary">
            save
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          sx={{
            width: "100%",
            bgcolor: "#fff",
            margin: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "60%" }}
          >
            <InputLabel htmlFor="custom-input">経営理念 </InputLabel>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "40%" }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Box>
                <InputLabel htmlFor="custom-input">今期評価</InputLabel>
              </Box>
              {/* <Box>
                <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
                  <Tooltip title={"経営理念とは"}>
                    <HelpIcon />
                  </Tooltip>
                </IconButton>
                <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
                  <ClearIcon />
                </IconButton>
              </Box> */}
            </Box>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          sx={{
            width: "100%",
            bgcolor: "#fff",
            margin: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "60%" }}
          >
            <InputLabel htmlFor="custom-input">ミッション </InputLabel>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "40%" }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Box>
                <InputLabel htmlFor="custom-input">今期評価</InputLabel>
              </Box>
            </Box>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          sx={{
            width: "100%",
            bgcolor: "#fff",
            margin: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "60%" }}
          >
            <InputLabel htmlFor="custom-input">経営指針 </InputLabel>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "40%" }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Box>
                <InputLabel htmlFor="custom-input">今期評価</InputLabel>
              </Box>
            </Box>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          sx={{
            width: "100%",
            bgcolor: "#fff",
            margin: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "60%" }}
          >
            <InputLabel htmlFor="custom-input">経営ビジョン </InputLabel>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "40%" }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Box>
                <InputLabel htmlFor="custom-input">今期評価</InputLabel>
              </Box>
            </Box>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          sx={{
            width: "100%",
            bgcolor: "#fff",
            margin: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "60%" }}
          >
            <InputLabel htmlFor="custom-input">経営戦略 </InputLabel>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ paddingY: 0.5, width: "40%" }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Box>
                <InputLabel htmlFor="custom-input">今期評価</InputLabel>
              </Box>
            </Box>
            <Controller
              name={"managementPhilosophy"}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  sx={{ width: "100%", maxHeight: "102px" }}
                  {...controllerField}
                  rows={3}
                  multiline
                  variant="outlined"
                />
              )}
            />
          </Box>
        </Box>

        <StyledBox sx={{ bgcolor: "#fff", height: 300 }}>
          <Typography
            variant="h5"
            component={"h4"}
            sx={{ marginY: 1, paddingLeft: 1 }}
          >
            KPI Grid
          </Typography>
          <Controller
            name={"kpi"}
            control={control}
            render={({ field: controllerField }) => (
              <BaseGrid
                {...controllerField}
                rowData={KPIGridRowData}
                colDefs={KPIGridColDefs}
              />
            )}
          />
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
      </Box>
    </Container>
  );
};

export default ManagementPlanAssessment;
