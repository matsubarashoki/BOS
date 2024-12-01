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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { headerHeightStore } from "../../store/headerHeightStore";
import { koronazidainokeieikokoroe } from "../../utils/mock/koronazidainokeieikokoroe";
import ScrollingTextBar from "../ScrollingTextBar";
import NewsTable from "./NewsTable";

const ManagementPlanTop = () => {
  const { headerHeight } = headerHeightStore();
  const [text, setText] = useState<string>(koronazidainokeieikokoroe[0]);
  function getRandomValue(obj: { [key: number]: string }) {
    console.log("ランダムな値を取得し始めます...");
    console.log(text);
    setInterval(() => {
      const keys = Object.keys(obj); // オブジェクトのキーを取得 (文字列の配列)
      const randomIndex = Math.floor(Math.random() * keys.length); // ランダムなインデックスを生成
      const randomKey = keys[randomIndex]; // ランダムなキーを取得
      setText(obj[Number(randomKey)]); // キーに対応する値を返す
    }, 60 * 1000); // 1分（60秒 × 1000ミリ秒）
  }
  useEffect(() => {
    getRandomValue(koronazidainokeieikokoroe);
  }, []);

  const theme = useTheme();
  const today = new Date().toLocaleDateString("ja-JP");
  const StyledCard = styled(Card)(() => ({
    width: "50%",
    height: "200px",
    margin: "8px",
  }));

  return (
    <Box marginTop={headerHeight}>
      <ScrollingTextBar text={text} />

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
                to="/managementPlan/create"
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
                to="/managementPlan/analyze"
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
                to="/managementPlan/assessment"
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
                to="/managementPlan/history"
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
    </Box>
  );
};

export default ManagementPlanTop;
