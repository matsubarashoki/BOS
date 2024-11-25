import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  const theme = useTheme();
  const [contentMarginTop, setContentMarginTop] = useState(0);

  return (
    <Box
      className="layout-root"
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
    >
      <header>
        <Header setContentMarginTop={setContentMarginTop} />
      </header>
      <Box
        component={"main"}
        className="main-container"
        sx={{
          marginTop: `${contentMarginTop}px`,
          backgroundColor: theme.palette.subColor.main,
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Box>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default Layout;
