import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

// ニュースデータの例
const newsData = [
  {
    id: 1,
    title: "第11期経営計画が策定されました！今期も頑張ってまいりましょう！",
    category: "全体",
    date: "2024-11-20",
    status: "公開",
  },
  {
    id: 2,
    title: "第10期アクションプランの評価期限が近づいています。",
    category: "営業部",
    date: "2024-11-18",
    status: "公開",
  },
  {
    id: 3,
    title: "第10期アクションプランの評価期限が近づいています。",
    category: "開発部",
    date: "2024-11-15",
    status: "公開",
  },
];

// ステータスに応じた色分け
const getStatusChipColor = (status: string) => {
  return status === "公開" ? "success" : "default";
};

const NewsTable: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        ニュース一覧
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ height: "24px" }}>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                タイトル
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                カテゴリ
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                日付
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                状態
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newsData.map((news) => (
              <TableRow key={news.id} sx={{ height: "20px" }}>
                <TableCell align="left" sx={{ py: 0.5 }}>
                  {news.title}
                </TableCell>
                <TableCell align="center" sx={{ py: 0.5 }}>
                  {news.category}
                </TableCell>
                <TableCell align="center" sx={{ py: 0.5 }}>
                  {news.date}
                </TableCell>
                <TableCell align="center" sx={{ py: 0.5 }}>
                  <Chip
                    label={news.status}
                    color={getStatusChipColor(news.status)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NewsTable;
