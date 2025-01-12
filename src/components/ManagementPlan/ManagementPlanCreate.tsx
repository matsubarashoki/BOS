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
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useManagementPlanStore from "../../store/managementPlanStore";
import { ActionPlanGridRowData } from "../../utils/mock/ActionPlanGridRowData";
import { KPIGridRowData } from "../../utils/mock/KPIGridRows";
import { ActionPlanGridRow, KPIGridRow } from "../../utils/type/type";
import { ManagementPlanSchema } from "../../utils/zodSchema/managementPlanForm";
import { ActionPlanGridColDefs } from "./ActionPlanGridColDefs";
import { BaseGrid } from "./BaseGrid";
import { KPIGridColDefs } from "./KPIGridColDefs";

const ManagementPlanCreate = () => {
  const { managementPlan, updateManagementPlan } = useManagementPlanStore();
  const [localKPIGridRowData, setLocalKPIGridRowData] =
    useState<KPIGridRow[]>(KPIGridRowData);

  const [localActionPlanGridRowData, setLocalActionPlanGridRowData] = useState<
    ActionPlanGridRow[]
  >(ActionPlanGridRowData);

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

  const addKPIGrid = () => {
    const maxId = localKPIGridRowData.reduce((max, row) => {
      return row.id > max ? row.id : max;
    }, 0);
    setLocalKPIGridRowData((prevState) => [
      ...prevState,
      {
        id: maxId + 1,
        target_qualitative_category: "",
        target_qualitative: "",
        target_quantitative_category: "",
        target_quantitative: "",
      },
    ]);
  };

  const addActionPlan = () => {
    setLocalActionPlanGridRowData((prevState) => [
      ...prevState,
      {
        No: "",
        contents: "",
        period: "",
        remarks: "",
      },
    ]);
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

          <Controller
            name={"managementPhilosophy"}
            control={control}
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                rows={3}
                multiline
                variant="outlined"
              />
            )}
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

          <Controller
            name={"mission"}
            control={control}
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                rows={3}
                multiline
                variant="outlined"
              />
            )}
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

          <Controller
            name={"guidingPrinciple"}
            control={control}
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                rows={3}
                multiline
                variant="outlined"
              />
            )}
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
                <Tooltip title={"経営ビジョンとは"}>
                  <HelpIcon />
                </Tooltip>
              </IconButton>
              <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
                <ClearIcon />
              </IconButton>
            </Box>
          </Box>

          <Controller
            name={"managementVision"}
            control={control}
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                rows={3}
                multiline
                variant="outlined"
              />
            )}
          />
        </StyledBox>

        <StyledBox sx={{ bgcolor: "#fff" }}>
          {/* InputLabel */}
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <InputLabel htmlFor="custom-input">経営戦略 </InputLabel>
            <Box>
              <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
                <Tooltip title={"経営戦略とは"}>
                  <HelpIcon />
                </Tooltip>
              </IconButton>
              <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
                <ClearIcon />
              </IconButton>
            </Box>
          </Box>

          <Controller
            name={"strategy"}
            control={control}
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                rows={6}
                multiline
                variant="outlined"
              />
            )}
          />
        </StyledBox>

        <StyledBox sx={{ bgcolor: "#fff" }}>
          {/* InputLabel */}
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <InputLabel htmlFor="custom-input">外部環境 </InputLabel>
            <Box>
              <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
                <Tooltip title={"外部環境とは"}>
                  <HelpIcon />
                </Tooltip>
              </IconButton>
              <IconButton sx={{ paddingY: 0, paddingX: 0.5 }}>
                <ClearIcon />
              </IconButton>
            </Box>
          </Box>

          <Controller
            name={"circumstance"}
            control={control}
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                rows={3}
                multiline
                variant="outlined"
              />
            )}
          />
        </StyledBox>

        <StyledBox sx={{ bgcolor: "#fff", height: 300 }}>
          <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
            <Box>
              <Typography
                variant="h5"
                component={"h4"}
                sx={{ marginY: 1, paddingLeft: 1 }}
              >
                KPI Grid
              </Typography>
            </Box>
            <Box display={"flex"} textAlign={"center"} py={1}>
              <Button
                sx={{ border: "0.5px solid green", mx: 1 }}
                onClick={() => addKPIGrid()}
              >
                追加
              </Button>
              <Button sx={{ border: "0.5px solid green", mx: 1 }}>削除</Button>
            </Box>
          </Box>

          <Controller
            name={"kpi"}
            control={control}
            render={({ field: controllerField }) => (
              <BaseGrid
                {...controllerField}
                rowData={localKPIGridRowData}
                colDefs={KPIGridColDefs}
              />
            )}
          />
        </StyledBox>

        <StyledBox sx={{ bgcolor: "#fff", height: 300 }}>
          <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
            <Box>
              <Typography
                variant="h5"
                component={"h4"}
                sx={{ marginY: 1, paddingLeft: 1 }}
              >
                アクションプラン
              </Typography>
            </Box>
            <Box display={"flex"} textAlign={"center"} py={1}>
              <Button
                sx={{ border: "0.5px solid green", mx: 1 }}
                onClick={() => addActionPlan()}
              >
                追加
              </Button>
              <Button sx={{ border: "0.5px solid green", mx: 1 }}>削除</Button>
            </Box>
          </Box>
          <Controller
            name={"actionPlan"}
            control={control}
            render={({ field: controllerField }) => (
              <BaseGrid
                {...controllerField}
                rowData={localActionPlanGridRowData}
                colDefs={ActionPlanGridColDefs}
              />
            )}
          />
        </StyledBox>
      </Box>
    </Container>
  );
};

export default ManagementPlanCreate;
