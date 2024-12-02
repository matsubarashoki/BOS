import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { addMonths } from "date-fns";
import { ja } from "date-fns/locale";

const MonthSelector = () => {
  const [startMonth, setStartMonth] = useState<Date>(new Date());
  const [endMonth, setEndMonth] = useState<Date>(new Date());

  const handleFirstDateChange = (newDate: Date | null) => {
    if (newDate) {
      setStartMonth(newDate);
    }
  };

  const handleEndDateChange = (newDate: Date | null) => {
    if (newDate) {
      setEndMonth(newDate);
    }
  };

  //先月ボタンを押したときの処理
  const handlePreviousMonth = () => {
    const previousMonth = addMonths(startMonth, -1);
    setStartMonth(previousMonth);
  };

  //次月ボタンを押したときの処理
  const handleNextMonth = () => {
    const nextMonth = addMonths(startMonth, 1);
    setStartMonth(nextMonth);
  };
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: "1px solid #ccc",
        borderRadius: 2,
        margin: 1,
      }}
    >
      <Typography
        variant="h5"
        component={"h4"}
        sx={{ marginY: 1, paddingLeft: 1 }}
      >
        Term選択
      </Typography>

      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={ja}
        // dateFormats={{ monthAndYear: "yyyy年 MM月" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY: 1,
          }}
        >
          <DatePicker
            onChange={handleFirstDateChange}
            value={startMonth}
            label="年月を選択"
            sx={{ mx: 2, background: "white" }}
            views={["year", "month"]}
            format="yyyy/MM"
            slotProps={{
              toolbar: {
                toolbarFormat: "yyyy年MM月",
              },
            }}
          />
          <Typography variant="h3" component={"h1"} sx={{ marginY: 1 }}>
            -
          </Typography>
          <DatePicker
            onChange={handleEndDateChange}
            value={endMonth}
            label="年月を選択"
            sx={{ mx: 2, background: "white" }}
            views={["year", "month"]}
            format="yyyy/MM"
            slotProps={{
              toolbar: {
                toolbarFormat: "yyyy年MM月",
              },
            }}
          />
        </Box>
      </LocalizationProvider>
    </Box>
  );
};

export default MonthSelector;
