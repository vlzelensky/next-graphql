import {
  TableRow,
  TableCell,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { DeleteIcon } from "@material-ui/icons/Delete";
import { EditIcon } from "@material-ui/icons/Edit";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_PURCHASE } from "../../mutations/purchase";

const PurchaseRow = ({ el, i }) => {
  const [open, setOpen] = useState(false);
  const [removePurchase] = useMutation(DELETE_PURCHASE);

  const handleClose = ({ refetch }) => {
    setOpen(false);
  };

  const deletePurchase = async (id) => {
    try {
      await removePurchase({
        variables: {
          input: { id },
        },
      });
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          Are you sure you want to delete "{el.title}" purchase?
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      <TableRow key={i}>
        <TableCell>{el.title}</TableCell>
        <TableCell align="right">{el.date}</TableCell>
        <TableCell align="right">
          <button className="action-btn" onClick={() => editPurchase(el.id)}>
            <EditIcon />
          </button>
          <button className="action-btn" onClick={() => deletePurchase(el.id)}>
            <DeleteIcon />
          </button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default PurchaseRow;
