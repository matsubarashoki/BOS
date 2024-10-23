
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface SharedDialogProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    onSubmit: () => void;
}


const DialogModule: React.FC<SharedDialogProps> = ({ open, onClose, title, children, onSubmit }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers>{children}</DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={onSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogModule;
