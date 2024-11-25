import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <AppBar
        component="footer"
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: (theme) => theme.zIndex.drawer + 1, // Drawerの上に配置
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption">©2024 bos</Typography>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
