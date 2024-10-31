import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Snackbar,
  useTheme,
} from "@mui/material";
import { DataGrid, GridRowSelectionModel, GridToolbar } from "@mui/x-data-grid";
import { PrimeReactProvider } from "primereact/api";
import { OrganizationChart } from "primereact/organizationchart";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { convertToOrgChartData } from "../../../utils/func/convertToOrgChartData";
import { orgDefoValue } from "../../../utils/initialValues/initialValues";
import { orgChartMockData } from "../../../utils/mock/orgChartMockData";
import { orgRows } from "../../../utils/mock/Orgs";
import { OrgChartNode, OrgRow } from "../../../utils/type/type";
import { OrgFormSchema, orgFormSchema } from "../../../utils/zodSchema/orgForm";
import DialogModule from "../../Dialog";
import { OrgForm } from "./OrgForm";
import { orgColumns } from "./OrgGridColDef";
import "./OrgMaster.css";

export default function OrgManagement() {
  const theme = useTheme();
  const paginationModel = { page: 0, pageSize: 10 };
  const [orgs, setOrgs] = useState<OrgRow[]>(orgRows);
  const [orgChartData, setOrgChartData] =
    useState<OrgChartNode[]>(orgChartMockData);
  const [open, setOpen] = useState(false);
  const [deleteDialogpen, setDeleteDialogpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [selectedRows, setSelectedRows] = useState<OrgRow[]>([]);

  useEffect(() => {
    const newOrgChartData = convertToOrgChartData(orgs);
    setOrgChartData(newOrgChartData);
  }, [orgs]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<OrgFormSchema>({
    defaultValues: orgDefoValue,
    resolver: zodResolver(orgFormSchema),
  });

  const handleOpen = (mode: string) => {
    setDialogTitle(mode);
    setOpen(true);
  };

  // ダイアログを閉じる
  const handleClose = () => {
    setOpen(false);
    setDeleteDialogpen(false);
  };

  // SnackBarを閉じる
  const handleSnackbarClose = () => {
    setSnackBarOpen(false);
  };

  // 選択した行データを保持
  const handleSelectionChange = (selectionModel: GridRowSelectionModel) => {
    const selectedData = orgs.filter((org) =>
      selectionModel.includes(org.orgId as string)
    );
    setSelectedRows(selectedData);
  };

  // 編集処理
  const handleEdit = () => {
    if (selectedRows.length === 1) {
      const row = selectedRows[0];
      setValue("orgId", row.orgId);
      setValue("parentId", row.parentId);
      setValue("level", row.level);
      setValue("Name", row.Name);
      setValue("createBy", row.createBy);
      handleOpen("Edit");
    } else if (selectedRows.length === 0) {
      setSnackBarOpen(true);
      setSnackBarMessage("選択されていません。");
    } else {
      setSnackBarOpen(true);
      setSnackBarMessage("複数選択されています");
    }
  };

  const onSubmit: SubmitHandler<OrgFormSchema> = async (data) => {
    if (data.id) {
      const updatedData = orgs.map((item) =>
        item.orgId === data.orgId ? { ...item, ...data } : item
      );
      console.log(updatedData);
      setOrgs(updatedData as OrgRow[]);
    } else {
      // フォームデータを送信する処理をここに追加(まだモックに追加のみ)
      const maxId = orgs.reduce((max, org) => {
        const id = org.id ? Number(org.id) : 0; // nullチェックを含めて変換
        return id > max ? id : max;
      }, 0);
      const newOrg: OrgRow = { ...data, id: maxId + 1 };
      setOrgs((prevState) => [...prevState, newOrg]);
    }

    reset();
    handleClose();
  };

  // Delete処理
  const handleDelete = () => {
    const selectedOrgIds = selectedRows.map((row) => {
      return row.orgId;
    });
    const deletedOrgs = orgRows.filter(
      (org) => !selectedOrgIds.includes(org.orgId)
    );
    setOrgs(deletedOrgs);
    handleClose();
  };

  return (
    <PrimeReactProvider>
      <Container maxWidth={false} className="OrgManagement-container">
        <Box className="orgManagement-box" sx={{ padding: 2, width: "100%" }}>
          <Box
            className="card overflow-x-auto"
            sx={{
              marginY: 1,
              paddingTop: 2,
              height: "auto",
              width: "100%",
              bgcolor: "#fff",
              borderColor: theme.palette.secondary.main,
              borderRadius: 5,
            }}
          >
            <OrganizationChart
              value={orgChartData}
              nodeTemplate={(node) => (
                <div>
                  <span>{node.label}</span>
                </div>
              )}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            className="orgManagement-itemBox"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              padding: 1,
            }}
          >
            <Button
              sx={{
                bgcolor: "#fff",
                borderRadius: "10%",
                border: "solid",
                marginX: 0.5,
              }}
              onClick={() => handleOpen("add")}
            >
              Add
            </Button>
            <Button
              sx={{
                bgcolor: "#fff",
                borderRadius: "10%",
                border: "solid",
                marginX: 0.5,
              }}
              onClick={() => handleEdit()}
            >
              Edit
            </Button>
            <Button
              sx={{
                bgcolor: "#fff",
                borderRadius: "10%",
                border: "solid",
                marginX: 0.5,
              }}
              onClick={() => {
                if (selectedRows.length !== 0) {
                  setDeleteDialogpen(true);
                } else {
                  setSnackBarOpen(true);
                  setSnackBarMessage("Userが選択されていません");
                }
              }}
            >
              Delete
            </Button>
          </Box>

          <Paper sx={{ height: 500, width: "100%", bgcolor: "#fff" }}>
            <DataGrid
              rows={orgs}
              columns={orgColumns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              getRowId={(row) => row.orgId}
              onRowSelectionModelChange={handleSelectionChange}
              slots={{ toolbar: GridToolbar }}
            />
          </Paper>
        </Box>

        {/* Add or Updateダイアログ */}
        <DialogModule
          open={open}
          onClose={handleClose}
          title={dialogTitle}
          onSubmit={handleSubmit(onSubmit)}
        >
          <OrgForm control={control} errors={errors} />
        </DialogModule>
        {/* Delete ダイアログ */}
        <DialogModule
          open={deleteDialogpen}
          onClose={handleClose}
          title={"Delete Confirm"}
          onSubmit={() => handleDelete()}
        >
          <Box>削除してよろしいですか？</Box>
        </DialogModule>
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={1500}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          sx={{ width: "100%" }}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {snackBarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </PrimeReactProvider>
  );
}
