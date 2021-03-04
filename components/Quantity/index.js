import { useState } from "react";
import { incrementQuantity, decrementQuantity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const Quantity = ({ quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        style={{ background: "none", border: "none", padding: "0" }}
        onClick={() => dispatch(decrementQuantity(id))}
        disabled={!quantity}
      >
        <RemoveIcon className="quantity-btn" />
      </button>

      <span>{quantity}</span>
      <button
        style={{ background: "none", border: "none", padding: "0" }}
        onClick={() => dispatch(incrementQuantity(id))}
      >
        <AddIcon className="quantity-btn" />
      </button>
    </div>
  );
};

export default Quantity;
