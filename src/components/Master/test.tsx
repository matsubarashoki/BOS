import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// データの型定義
interface Data {
  id: number;
  name: string;
}

// メインコンポーネント
function AddEditDialog() {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState<Data[]>([]); // データのリストを管理
  const [currentData, setCurrentData] = useState<Data | null>(null); // 編集時のデータを管理
  const [formData, setFormData] = useState({ name: "" }); // フォームデータの管理

  // ダイアログを開く（新規追加）
  const handleAddClick = () => {
    setFormData({ name: "" }); // フォームの初期化
    setEditMode(false);
    setOpen(true);
  };

  // ダイアログを開く（編集モード）
  const handleEditClick = (item: Data) => {
    setFormData({ name: item.name });
    setCurrentData(item);
    setEditMode(true);
    setOpen(true);
  };

  // フォームの変更を管理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ダイアログを閉じる
  const handleClose = () => {
    setOpen(false);
    setFormData({ name: "" });
    setCurrentData(null);
  };

  // データの保存
  const handleSave = () => {
    if (editMode && currentData) {
      // 編集モード：データの更新
      const updatedData = data.map((item) =>
        item.id === currentData.id ? { ...item, name: formData.name } : item
      );
      setData(updatedData);
    } else {
      // 追加モード：新しいデータの追加
      const newData: Data = { id: Date.now(), name: formData.name };
      setData([...data, newData]);
    }
    handleClose();
  };

  return (
    <div>
      <Typography variant="h6">Data List</Typography>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <Button
              onClick={() => handleEditClick(item)}
              variant="outlined"
              size="small"
              style={{ marginLeft: 8 }}
            >
              Edit
            </Button>
          </li>
        ))}
      </ul>

      <Button variant="contained" onClick={handleAddClick}>
        Add New
      </Button>

      {/* ダイアログ */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? "Edit Item" : "Add New Item"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>{editMode ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddEditDialog;
