import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmationDialog(props) {
  const theme = useTheme();
  let { title, message, okButtonText, cancelButtonText, openState } = props;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(openState);
  }, [openState]);

  const handleClose = () => {
    setOpen(false);
    props.onCancelButtonClick();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: theme.palette.mode === "dark" ? "white" : "black" }}
            onClick={handleClose}
          >
            {cancelButtonText ? cancelButtonText : "Cancel"}
          </Button>
          <Button
            sx={{ color: theme.palette.mode === "dark" ? "white" : "black" }}
            onClick={() => {
              props.onOkayButtonClick();
            }}
          >
            {okButtonText ? okButtonText : "Ok"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
