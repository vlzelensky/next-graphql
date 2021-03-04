import Router from "next/router";
import NavBar from "../../components/NavBar/navbar.js";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, createPurchase } from "../../redux/actions";
import Quantity from "../../components/Quantity";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const Post = () => {
  const { products } = useSelector((globalState) => globalState.purchases);

  const chooseColor = (quantity) => {
    if (quantity === 0) {
      return "lightgrey";
    } else {
      return "#fff";
    }
  };
  const dispatch = useDispatch();
  const createNewPurchase = () => {
    dispatch(addProducts());
    dispatch(createPurchase());
    Router.push("/main");
  };

  return (
    <NavBar>
      <div className="container">
        <div className="main-box">
          <h1>Select products</h1>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h2>Description</h2>
                  </TableCell>
                  <TableCell align="right">
                    <h2>Weight</h2>
                  </TableCell>
                  <TableCell align="right">
                    <h2>Price</h2>
                  </TableCell>
                  <TableCell align="right">
                    <h2>Quantity</h2>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((el, i) => (
                  <TableRow
                    style={{ background: chooseColor(el.quantity) }}
                    key={i}
                  >
                    <TableCell>{el.description}</TableCell>
                    <TableCell align="right">{el.weight}</TableCell>
                    <TableCell align="right">{el.price}</TableCell>
                    <TableCell align="right">
                      <Quantity quantity={el.quantity} id={el.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button
            onClick={createNewPurchase}
            style={{ margin: "0" }}
            className="gradient-btn"
          >
            Add
          </button>
        </div>
      </div>
    </NavBar>
  );
};

export default Post;
