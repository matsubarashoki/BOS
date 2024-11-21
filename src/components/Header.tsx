import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../route/routeAuthHooks";

const Header = () => {
  const theme = useTheme();
  const { setUser } = useAuth();
  const textColor = theme.palette.primary.main;
  const navigate = useNavigate();
  const setNavLinks: Array<{ text: string; url: string }> = [
    { text: "Top", url: "/" },
    { text: "Master", url: "master" },
    { text: "Report", url: "report" },
    { text: "Wiki", url: "/wiki" },
    { text: "ManagementPlan", url: "/managementPlan" },
    { text: "Blog", url: "/blog" },
  ];
  // メニューの開閉を管理
  const [open, setOpen] = useState<boolean>(false);
  // メニューを配置するHTML要素を格納する
  const anchorEl = useRef<HTMLButtonElement>(null);
  // メニュー開閉ハンドル
  const handleClickPerson = () => {
    setOpen(!open);
  };
  // メニューを閉めるハンドル
  const handleClose = () => {
    setOpen(false);
  };
  const handleUserSettings = () => {
    navigate("/userSettings");
  };
  const handleLogout = () => {
    localStorage.removeItem("loginUser");
    setUser(null);
  };
  return (
    <AppBar
      component="header"
      position="static"
      sx={{ top: 0, width: "100%", backgroundColor: "white" }}
    >
      <Box display={"flex"} sx={{ width: "100%" }}>
        <Box
          className="header-icon"
          display="flex"
          justifyContent="flex-start"
          alignItems={"center"}
          flexGrow={1}
          width={"100%"}
          marginX={2}
        >
          <IconButton
            edge="start"
            aria-label="white"
            sx={{
              backgroundColor: textColor,
              color: "white", // アイコンの色を設定
              "&:hover": {
                backgroundColor: "#283593", // ホバー時の背景色を設定
              },
              mr: 2,
            }}
          >
            <SettingsIcon fontSize="large" />
          </IconButton>
          <Box flexDirection={"column"}>
            <Typography component="h1" color={textColor}>
              BOS
            </Typography>
            <Typography component="h3" color={textColor}>
              Bussiness Operating System
            </Typography>
          </Box>
        </Box>
        <Box
          className="header-menuItems"
          display="flex"
          justifyContent="center"
          flexGrow={1}
          width={"100%"}
        >
          <List component="nav" sx={{ display: "flex" }}>
            {setNavLinks.map((navLink) => (
              <ListItem
                disablePadding
                key={navLink.text}
                component={Link}
                to={navLink.url}
              >
                <ListItemButton>
                  <ListItemText
                    primary={navLink.text}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: textColor,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          className="header-loginUser"
          display="flex"
          justifyContent="flex-end"
          alignItems={"center"}
          flexGrow={1}
          width={"100%"}
        >
          <IconButton
            ref={anchorEl}
            onClick={handleClickPerson}
            aria-label="people"
            sx={{
              backgroundColor: textColor,
              color: "white", // アイコンの色を設定
              "&:hover": {
                backgroundColor: "#283593", // ホバー時の背景色を設定
              },
              "& .MuiListItemText-primary": {
                color: textColor,
              },
              mr: 2,
            }}
          >
            <PersonIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl.current}
            open={open}
            disableAutoFocusItem={false}
            onClose={handleClose}
            transitionDuration={"auto"}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{}}
          >
            <MenuItem onClick={handleUserSettings}>アカウント設定</MenuItem>
            <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
          </Menu>{" "}
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
