import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";

const Board = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <Container>
      <Box>id:{id}</Box>
    </Container>
  );
};

export default Board;
