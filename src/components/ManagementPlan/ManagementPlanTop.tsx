import { Box, Card, Container, Grid2, Paper, styled } from "@mui/material";
import NewsTable from "./NewsTable";

const ManagementPlanTop = () => {

  const StyledCard = styled(Card)(() => ({
    width: "400px",
    height: "200px",
    margin:"8px",
  }))

  return (
    <Container>
      <Box
        sx={{ bgcolor: "#fff" }}
        justifyContent={"center"}
        margin={1}
        flexGrow={1}
        minHeight={"calc(100vh - 200px)"}
      >
        <Grid2 container>
          <Box width={'100%'} display={'flex'} justifyContent={"space-between"} m={1} textAlign={'center'}>
            <StyledCard>Term</StyledCard>
            <StyledCard>一転語</StyledCard>
          </Box>
          <Grid2 >
    
              <NewsTable />

  
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default ManagementPlanTop;


