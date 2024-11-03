import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useScreenNameStore } from "../store/screenNameStore";
import { pathScreenSet } from "../utils/constants/screenName";

const Layout = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const { screenName, setScreenName } = useScreenNameStore();

  useEffect(() => {
    console.log(pathname);
    if (pathScreenSet[pathname].name) {
      setScreenName(pathScreenSet[pathname].name);
    }
  }, [pathname]);

  return (
    <Box
      className="layout-root"
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
    >
      <header>
        <Header />
      </header>
      <Box
        component={"main"}
        className="main-container"
        sx={{
          backgroundColor: theme.palette.subColor.main,
          flexGrow: 1,
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: theme.palette.primary.light,
            justifyContent: "center",
          }}
        >
          <Box
            className="master-box"
            display={"flex"}
            // width={"80%"}
            justifyContent={"center"}
            margin={1}
          >
            <Typography
              justifyContent={"center"}
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ my: 2 }}
              color="#fff"
            >
              {screenName}
            </Typography>
          </Box>
        </Toolbar>
        <Outlet />
      </Box>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default Layout;
