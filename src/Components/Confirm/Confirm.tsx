import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface ConfirmDeleteProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    userName?: string;
}

function ConfirmDelete({
    open,
    onClose,
    onConfirm,
    userName,
}: ConfirmDeleteProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby='confirm-dialog-title'
            aria-describedby='confirm-dialog-description'
        >
            <DialogTitle id='confirm-dialog-title'>Confirmation</DialogTitle>
            <DialogContent>
                <DialogContentText id='confirm-dialog-description'>
                    Are you sure you want to delete this user?{" "}
                    {userName ? "user - " + userName : ""}? This action cannot
                    be undone!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color='primary'>
                    Cancel
                </Button>
                <Button
                    onClick={onConfirm}
                    color='error'
                    variant='contained'
                    autoFocus
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDelete;
