import { Menu } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const textColor = theme.palette.primary.main;
  const setNavLinks: Array<{ text: string; url: string }> = [
    { text: "Top", url: "/bos/home" },
    { text: "Master", url: "/bos/master" },
    { text: "Skill", url: "/skill" },
    { text: "Production", url: "/production" },
    { text: "Contact", url: "/contact" },
    { text: "Blog", url: "/blog" },
  ];
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
            <Menu />
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
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
