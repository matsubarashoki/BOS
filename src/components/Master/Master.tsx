import { People } from "@mui/icons-material";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const MasterCard = styled(Card)(() => ({
  width: "400px",
  height: "150px",
  margin: 2,
}));

const Master = () => {
  return (
    <Container maxWidth={false} className="master-container">
      <Box
        className="master-box"
        display={"flex"}
        justifyContent={"center"}
        margin={1}
        flexGrow={1}
        minHeight={"calc(100vh - 200px)"}
      >
        <Grid
          container
          spacing={2}
          flexDirection={"column"}
          alignItems={"center"}
          margin={1}
        >
          <Grid sx={{ marginY: 2 }} display={"flex"}>
            <MasterCard sx={{ margin: 1, bgcolor: "#fff" }}>
              <CardActionArea
                component={Link}
                to="/master/userManagement"
                sx={{ height: "100%" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center", // 水平方向のセンタリング
                    height: "100%", // 高さを100%に設定
                  }}
                >
                  <People sx={{ alignSelf: "center" }} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    User Management
                  </Typography>
                </CardContent>
              </CardActionArea>
            </MasterCard>
            <MasterCard sx={{ margin: 1, bgcolor: "#fff" }}>
              <CardActionArea
                component={Link}
                to="/orgManagement"
                sx={{ height: "100%" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center", // 水平方向のセンタリング
                    height: "100%", // 高さを100%に設定
                  }}
                >
                  <CorporateFareIcon sx={{ alignSelf: "center" }} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    Organization Management
                  </Typography>
                </CardContent>
              </CardActionArea>
            </MasterCard>
          </Grid>
          <Grid sx={{ marginY: 1 }} display={"flex"}>
            <MasterCard sx={{ margin: 1, bgcolor: "#fff" }}>
              <CardActionArea
                component={Link}
                to="/destination"
                sx={{ height: "100%" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center", // 水平方向のセンタリング
                    height: "100%", // 高さを100%に設定
                  }}
                >
                  <LibraryAddCheckIcon sx={{ alignSelf: "center" }} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    Auth Management
                  </Typography>
                </CardContent>
              </CardActionArea>
            </MasterCard>
            <MasterCard sx={{ margin: 1, bgcolor: "#fff" }}>
              <CardActionArea
                component={Link}
                to="/destination"
                sx={{ height: "100%" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center", // 水平方向のセンタリング
                    height: "100%", // 高さを100%に設定
                  }}
                >
                  <LibraryAddCheckIcon sx={{ alignSelf: "center" }} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    To be implemented
                  </Typography>
                </CardContent>
              </CardActionArea>
            </MasterCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Master;
