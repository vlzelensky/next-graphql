import { useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@material-ui/core";
const WarningDialog = ({ openWarning, closeWarningDialog }) => {
  return (
    <Dialog open={openWarning} onClose={closeWarningDialog}>
      <DialogContent>
        Are you sure you want to delete this purchase?
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} className="default-btn">
          Cancel
        </button>
        <button className="default-btn cancel-btn">Delete</button>
      </DialogActions>
    </Dialog>
  );
};

export default WarningDialog;
