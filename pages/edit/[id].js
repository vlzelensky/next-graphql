import NavBar from "../../components/NavBar/navbar.js";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
const EditPurchase = () => {
  const { purchases } = useSelector((globalState) => globalState.purchases);
  const { id } = useRouter().query;
  return (
    <NavBar>
      <div className="container">
        <div className="main-box"></div>
      </div>
    </NavBar>
  );
};

export default EditPurchase;
