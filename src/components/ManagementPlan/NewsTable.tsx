import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  Box,
} from "@mui/material";

// ニュースデータの例
const newsData = [
  {
    id: 1,
    title: "新型AIツールがリリース",
    category: "テクノロジー",
    date: "2024-11-20",
    status: "公開",
  },
  {
    id: 2,
    title: "経済フォーラム2024開催決定",
    category: "経済",
    date: "2024-11-18",
    status: "非公開",
  },
  {
    id: 3,
    title: "観光地ランキング発表",
    category: "旅行",
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
            <TableRow>
              <TableCell align="left" style={{ fontWeight: "bold" }}>タイトル</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>カテゴリ</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>日付</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>状態</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newsData.map((news) => (
              <TableRow key={news.id}>
                <TableCell align="left">{news.title}</TableCell>
                <TableCell align="center">{news.category}</TableCell>
                <TableCell align="center">{news.date}</TableCell>
                <TableCell align="center">
                  <Chip label={news.status} color={getStatusChipColor(news.status)} />
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
