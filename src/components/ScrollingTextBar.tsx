import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const ScrollingTextBar: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden", // テキストがはみ出さないように隠す
        backgroundColor: theme.palette.baseColor.main, // バックグラウンド色
        color: "#fff", // テキストの色
        height: 50, // 高さを設定
      }}
    >
      <Typography
        variant="h6"
        sx={{
          whiteSpace: "nowrap", // テキストを一行に収める
          animation: "scroll-text 10s linear infinite", // アニメーション設定
          paddingLeft: "100%", // 最初にテキストが画面外から入ってくるように
        }}
      >
        ここにスクロールするテキストを配置します。いくつかの情報を流すことができます！
      </Typography>

      {/* CSSアニメーション */}
      <style>
        {`
          @keyframes scroll-text {
            0% {
              transform: translateX(100%); /* 右から左へ流れる */
            }
            100% {
              transform: translateX(-100%); /* 最終的に左側へ流れ出る */
            }
          }
        `}
      </style>
    </Box>
  );
};

export default ScrollingTextBar;
