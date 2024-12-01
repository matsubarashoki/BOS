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
} from "@mui/material";
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

  return (
    <Container sx={{ my: 1, alignItems: "center" }}>
      <Box>計画フォーマット選択</Box>

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

      <Box>今期目標（定性）</Box>
      <Box>今期目標（定量）</Box>
      <Box>KPI</Box>
      <Box>その他</Box>
    </Container>
  );
};

export default ManagementPlanCreate;
