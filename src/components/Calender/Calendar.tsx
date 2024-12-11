import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { Box, Container } from "@mui/material";

const Calendar = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 2 }}>
      <Box sx={{ padding: 2, width: "100%", bgcolor: "#fff" }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          locale={jaLocale}
          initialView="dayGridMonth"
        />
      </Box>
    </Container>
  );
};

export default Calendar;
