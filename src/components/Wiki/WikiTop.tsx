import { Box } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useRef, useState } from "react";
import WikiMenuList from "./WikiDrawer";

const WikiTop = () => {
  const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
  const [isOpen, setIsOpen] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box display={"flex"}>
      <Box
        ref={containerRef}
        sx={{
          width: "20%",
          height: "100vh",
          position: "relative",
          justifyContent: "flex-start",
        }}
      >
        <WikiMenuList />
      </Box>
      <Box
        justifyContent={"flex-end"}
        sx={{
          width: "80%",
          height: "100vh",
          padding: 1,
        }}
      >
        <div data-color-mode="light">
          <MDEditor
            value={value}
            preview="preview" // プレビューのみを表示
            hideToolbar={true} // ツールバーを非表示
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
