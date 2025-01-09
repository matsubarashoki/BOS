import { Send as SendIcon } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

const drawerWidth = 240;

// メッセージの型定義
interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
}

const sampleMessages: Message[] = [
  { id: 1, text: "こんにちは！", sender: "other" },
  { id: 2, text: "やあ、元気？", sender: "user" },
  { id: 3, text: "元気だよ。今日は何してる？", sender: "other" },
  {
    id: 4,
    text: "React学習",
    sender: "user",
  },
  { id: 5, text: "TypeScriptです", sender: "other" },
];

const Board = () => {
  const { id } = useParams<{ id: string }>();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(sampleMessages);

  const addMessage = () => {
    const maxId = messages.reduce((max, message) => {
      return message.id > max ? message.id : max;
    }, 0);
    setMessages((prevState) => [
      ...prevState,
      { id: maxId, text: newMessage, sender: "user" },
    ]);
    console.log(messages);
    setNewMessage("");
  };

  return (
    <Container>
      <Box sx={{ display: "flex", marginY: 2 }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              height: "calc(100vh - 180px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
              {/* メッセージ表示エリア */}
              {messages.map((message) => (
                <Box
                  key={message.id}
                  sx={{
                    display: "flex",
                    justifyContent:
                      message.sender === "user" ? "flex-end" : "flex-start",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "70%",
                      p: 1,
                      borderRadius: 2,
                      backgroundColor:
                        message.sender === "user"
                          ? "primary.light"
                          : "grey.200",
                      color:
                        message.sender === "user" ? "white" : "text.primary",
                    }}
                  >
                    <Typography variant="body1">{message.text}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ p: 2, backgroundColor: "background.default" }}>
              <TextField
                fullWidth
                variant="outlined"
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="メッセージを入力"
                InputProps={{
                  endAdornment: (
                    <IconButton color="primary" onClick={() => addMessage()}>
                      <SendIcon />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Board;
