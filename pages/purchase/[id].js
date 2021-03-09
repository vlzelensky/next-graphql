import Router from "next/router";
import NavBar from "../../components/NavBar/navbar.js";
import { changeInputValue } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PRODUCT } from "../../mutations/product";
import { GET_PRODUCTS } from "../../query/products";
import { addProducts, createPurchase, getProducts } from "../../redux/actions";
import Quantity from "../../components/Quantity";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
} from "@material-ui/core";

const Post = () => {
  const [open, setOpen] = useState(false);
  const { products } = useSelector((globalState) => globalState.purchases);
  const { newProduct } = useSelector((globalState) => globalState.purchases);
  const [isDisabled, setIsDisabled] = useState(
    Object.values(newProduct).every((value) => value)
  );
  const [addProduct, { error }] = useMutation(CREATE_PRODUCT);
  const { data, loading, getError, refetch } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (!loading) {
      dispatch(getProducts(data));
    }
  }, [data]);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createProduct = async () => {
    try {
      await addProduct({
        variables: {
          input: newProduct,
        },
      });
      await refetch();
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };
  return (
    <NavBar>
      <Dialog open={open} onClose={handleClose}>
        <h1 style={{ textAlign: "center" }}>Add new product</h1>
        <span>Description</span>
        <input
          onChange={(event) =>
            dispatch(
              changeInputValue(
                "CHANGE_NEW_PRODUCT_INPUTS",
                event.target.value,
                "description"
              )
            )
          }
          value={newProduct.description}
        ></input>
        <span>Weight</span>
        <input
          onChange={(event) =>
            dispatch(
              changeInputValue(
                "CHANGE_NEW_PRODUCT_INPUTS",
                event.target.value,
                "weight"
              )
            )
          }
          value={newProduct.weight}
        ></input>
        <span>Price</span>
        <input
          onChange={(event) =>
            dispatch(
              changeInputValue(
                "CHANGE_NEW_PRODUCT_INPUTS",
                event.target.value,
                "price"
              )
            )
          }
          value={newProduct.price}
        ></input>
        <div className="modal-buttons">
          <button onClick={handleClose} className="gradient-btn modal-btn">
            Cancel
          </button>
          <button
            onClick={createProduct}
            disabled={isDisabled}
            className="gradient-btn modal-btn"
          >
            Add
          </button>
        </div>
      </Dialog>
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
            onClick={handleOpen}
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
