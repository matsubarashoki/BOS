import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

const Report = () => {
  return (
    <Container className="report-container">
      <Box
        className="master-box"
        display={"flex"}
        justifyContent={"center"}
        margin={1}
        flexGrow={1}
        minHeight={"calc(100vh - 200px)"}
      >
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            marginBottom: "1rem",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "gray" }} />}
            sx={{
              "& .MuiAccordionSummary-content": {
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "text.secondary",
              },
              padding: 0,
            }}
          >
            <Typography>Minimal Accordion</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingLeft: "1rem" }}>
            <Typography color="text.secondary">
              A clean, minimal accordion with a bottom border only.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Report;
