import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Dispatch, SetStateAction } from "react";

interface WikiMenuListProps {
  setIsEditerOpen: Dispatch<SetStateAction<boolean>>;
}

const WikiMenuList = ({ setIsEditerOpen }: WikiMenuListProps) => {
  const theme = useTheme();
  const handleListItemClick = () => {
    setIsEditerOpen(true);
  };
  return (
    <Box
      sx={{
        width: 250,
        height: "100%",
        bgcolor: theme.palette.primary.contrastText,
      }}
      role="presentation"
    >
      <List>
        {["Wikiの使い方", "Java", "JavaScript", "TypeScript", "React"].map(
          (text, index) => (
            <ListItem
              key={text}
              sx={{
                height: "25px",
              }}
            >
              <ListItemButton
                sx={{ height: "25px" }}
                onClick={handleListItemClick}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
};

export default WikiMenuList;
