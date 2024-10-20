import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <>
      <AppBar
        component="footer"
        position="fixed"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#000000" }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption">©2023 engr-sng</Typography>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
