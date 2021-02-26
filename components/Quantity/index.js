import { useState } from "react";
import { incrementQuantity, decrementQuantity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const Quantity = () => {
  const dispatch = useDispatch();
  const { quantity } = useSelector((globalState) => globalState.purchases);
  // const [quantity, setQuantity] = useState(0);

  // const increaseQuantity = () => {
  //   setQuantity((quantity) => quantity + 1);
  // };
  // const reduseQuantity = () => {
  //   if (quantity <= 0) {
  //     return;
  //   }
  //   setQuantity((quantity) => quantity - 1);
  // };

  return (
    <div>
      <RemoveIcon
        className="quantity-btn"
        onClick={() => dispatch(decrementQuantity())}
      />
      <span>{quantity}</span>
      <AddIcon
        className="quantity-btn"
        onClick={() => dispatch(incrementQuantity())}
      />
    </div>
  );
};

export default Quantity;
