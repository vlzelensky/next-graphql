import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export default function Quantity() {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const reduseQuantity = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity((quantity) => quantity - 1);
  };

  return (
    <div>
      <RemoveIcon className="quantity-btn" onClick={reduseQuantity} />
      <span>{quantity}</span>
      <AddIcon className="quantity-btn" onClick={increaseQuantity} />
    </div>
  );
}
