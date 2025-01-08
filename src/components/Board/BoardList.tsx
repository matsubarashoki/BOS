import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const BoardList = () => {
  const boardList = [
    { id: 1, title: "新規プロダクトアイデア" },
    { id: 2, title: "会社への意見・アイデア" },
    { id: 3, title: "社内システム案" },
    { id: 4, title: "技術スレッド(Java)" },
    { id: 5, title: "技術スレッド(React)" },
    { id: 6, title: "技術スレッド(闇鍋)" },
    { id: 7, title: "ポエム" },
  ];

  return (
    <Container maxWidth={false} sx={{ padding: 2, marginY: 1 }}>
      <Box sx={{ padding: 2, width: "100%", bgcolor: "#fff" }}>
        <Grid2 container spacing={2}>
          {boardList.map((board) => (
            <Grid2 size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 2 }} key={board.id}>
              <Card sx={{ height: "150px", border: "0.05px solid gray" }}>
                <CardActionArea
                  component={Link}
                  to={`/board/${board.id}`}
                  sx={{ height: "100%", width: "100%" }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      fontWeight={"bold"}
                    >
                      {board.title}
                    </Typography>
                    <img src="//placebear.com/200/100" />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
};

export default BoardList;
