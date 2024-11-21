import { Box, Container } from "@mui/material";

const ManagementPlanTop = () => {
  return (
    <Container>
      <Box
        sx={{ bgcolor: "#fff" }}
        justifyContent={"center"}
        margin={1}
        flexGrow={1}
        minHeight={"calc(100vh - 200px)"}
      >
        <div>経営計画</div>
        <div>期間</div>
        <div>経営理念</div>
        <div>経営方針</div>
        <div>経営戦略</div>
        <div>アクションプラン</div>
        <div>過去計画参照</div>
      </Box>
    </Container>
  );
};

export default ManagementPlanTop;
