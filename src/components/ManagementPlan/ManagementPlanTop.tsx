import { CorporateFare, LibraryAddCheck, People } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid2,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import ScrollingTextBar from "../ScrollingTextBar";
import NewsTable from "./NewsTable";

const ManagementPlanTop = () => {
  const theme = useTheme();
  const today = new Date().toLocaleDateString("ja-JP");
  const StyledCard = styled(Card)(() => ({
    width: "50%",
    height: "200px",
    margin: "8px",
  }));

  return (
    <>
      <ScrollingTextBar />

      <Box
        sx={{ bgcolor: theme.palette.subColor.main, overflowY: "auto" }}
        justifyContent={"center"}
        margin={1}
        flexGrow={1}
        minHeight={"calc(100vh - 200px)"}
        height={"auto"}
        padding={2}
      >
        <Grid2 container>
          <Box
            sx={{ width: "100%", padding: 2, paddingTop: 0 }}
            textAlign={"center"}
          >
            <Card sx={{ width: "100%" }}>
              <Typography
                sx={{ my: 1 }}
                variant="h5"
                component="h1"
                gutterBottom
              >
                経営理念
              </Typography>
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Sawarabi Mincho, serif",
                  }}
                  variant="h4"
                  alignItems={"center"}
                >
                  私たちはお客様と地球の未来Needsを実現する【未来エンジニア】です。
                  <br />
                  お客様と共に繁栄する地球の実現を目指します。
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            m={1}
            textAlign={"center"}
          >
            <StyledCard sx={{ textAlign: "center" }}>
              <Typography
                sx={{ my: 1 }}
                variant="h6"
                component="h1"
                gutterBottom
              >
                Term
              </Typography>
              <CardContent>
                <Typography variant="h3">第11期 15日目</Typography>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <Typography
                sx={{ my: 1 }}
                variant="h6"
                component="h1"
                gutterBottom
              >
                本日の一転語
              </Typography>
              <CardContent>
                <Typography
                  sx={{ fontFamily: "Sawarabi Mincho, serif", padding: 1 }}
                  variant="h3"
                  alignItems={"center"}
                >
                  経営とは教え（経文）を営むことである。
                </Typography>
              </CardContent>
            </StyledCard>
          </Box>
          <Box sx={{ width: "100%", padding: 2, paddingTop: 0 }}>
            <NewsTable />
          </Box>

          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            m={1}
            textAlign={"center"}
          >
            <StyledCard sx={{ margin: 1, bgcolor: "#fff" }}>
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
                    経営計画作成
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
            <StyledCard sx={{ margin: 1, bgcolor: "#fff" }}>
              <CardActionArea
                component={Link}
                to="/master/orgManagement"
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
                  <CorporateFare sx={{ alignSelf: "center" }} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    経営分析
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
            <StyledCard sx={{ margin: 1, bgcolor: "#fff" }}>
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
                  <LibraryAddCheck sx={{ alignSelf: "center" }} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    計画評価
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
            <StyledCard sx={{ margin: 1, bgcolor: "#fff" }}>
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
                  <LibraryAddCheck sx={{ alignSelf: "center" }} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    履歴参照
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Box>

          <Box
            sx={{ width: "100%", padding: 2, paddingTop: 0, display: "flex" }}
          ></Box>
        </Grid2>
      </Box>
    </>
  );
};

export default ManagementPlanTop;
