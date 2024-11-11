import { Box, Button } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useRef, useState } from "react";
import WikiMenuList from "./WikiMenuList";

const WikiTop = () => {
  const [value, setValue] = useState<string | null>("**Hello world!!!**");
  const [isEditerOpen, setIsEditerOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box display={"flex"} minHeight={"calc(100vh - 200px)"}>
      <Box
        ref={containerRef}
        sx={{
          width: "20%",
          position: "relative",
          justifyContent: "flex-start",
        }}
      >
        <WikiMenuList setIsEditerOpen={setIsEditerOpen} setValue={setValue} />
      </Box>
      <Box
        justifyContent={"flex-end"}
        sx={{
          width: "80%",
          height: "100%",
          padding: 1,
        }}
      >
        <Box textAlign={"right"} sx={{ margin: 1 }}>
          <Button variant="contained">Save</Button>
        </Box>
        <div data-color-mode="light">
          <MDEditor
            value={value as string}
            preview={isEditerOpen ? "live" : "preview"}
            height={500} // エディタの高さを指定
            style={{ height: 500 }} // インラインスタイルで高さを調整
            onChange={(val) => {
              setValue(val!);
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default WikiTop;
