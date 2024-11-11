import { Box, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Dispatch, SetStateAction } from "react";
import { WikiRecords } from "../../utils/mock/Wiki";
import { WikiType } from "../../utils/type/type";

interface WikiMenuListProps {
  setIsEditerOpen: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<string | null>>;
}

const WikiMenuList = ({ setIsEditerOpen, setValue }: WikiMenuListProps) => {
  const theme = useTheme();

  const handleListItemClick = (contents: string) => {
    setIsEditerOpen(true);
    setValue(contents);
  };

  // 階層構造を作成
  function buildHierarchy(wikis: WikiType[]): WikiType[] {
    const map: Map<number, WikiType> = new Map();
    const roots: WikiType[] = [];

    wikis.forEach((wiki) => {
      map.set(wiki.id, { ...wiki, children: [] });
    });

    wikis.forEach((wiki) => {
      if (wiki.parentsId === null) {
        roots.push(map.get(wiki.id)!);
      } else {
        const parent = map.get(wiki.parentsId);
        if (parent) {
          parent.children?.push(map.get(wiki.id)!);
        }
      }
    });
    return roots;
  }

  const WikiConvertedRecords = buildHierarchy(WikiRecords);

  // 階層構造のツリーを表示
  const WikiTree = (records: WikiType[]) => {
    const renderTree = (nodes: WikiType[]) => {
      return nodes.map((node, index) => {
        return (
          <div>
            <ListItem
              key={node.title}
              sx={{
                height: "25px",
                margin: 1,
              }}
            >
              <ListItemButton
                sx={{ height: "25px" }}
                onClick={() => handleListItemClick(node.contents)}
              >
                <ListItemText primary={node.title} />
              </ListItemButton>
            </ListItem>
            {node.children && node.children.length > 0 && (
              <List sx={{ paddingLeft: 2 }}>{renderTree(node.children)}</List>
            )}
          </div>
        );
      });
    };

    return <>{renderTree(records)}</>;
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
      <List>{WikiTree(WikiConvertedRecords)}</List>
    </Box>
  );
};

export default WikiMenuList;
