import Router from "next/router";
import NavBar from "../../components/NavBar/navbar.js";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import { changeInputValue } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PRODUCT, DELETE_PRODUCT } from "../../mutations/product";
import { CREATE_PURCHASE } from "../../mutations/purchase";
import { GET_PRODUCTS } from "../../query/products";
import { GET_PURCHASES } from "../../query/purchases";
import { addProducts, getProducts } from "../../redux/actions";
import Quantity from "../../components/Quantity";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const Post = () => {
  const [vertical] = useState("top");
  const [horizontal] = useState("center");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { products, newProduct, currentPurchase } = useSelector(
    (globalState) => globalState.purchases
  );
  const [isDisabled, setIsDisabled] = useState(
    Object.values(newProduct).every((value) => value)
  );
  const [addProduct, { error }] = useMutation(CREATE_PRODUCT);
  const [createPurchase, { PurchaseError }] = useMutation(CREATE_PURCHASE);
  const refetchPurchases = useQuery(GET_PURCHASES).refetch;
  const [removeProduct] = useMutation(DELETE_PRODUCT);
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

  const createNewPurchase = async () => {
    dispatch(addProducts());
    try {
      await createPurchase({
        variables: {
          input: currentPurchase,
        },
      });
      await refetchPurchases();
    } catch (PurchaseError) {
      setWarningMessage(PurchaseError.message);
      setWarning(true);
      return;
    }
    Router.push("/main");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createProduct = async () => {
    if (!newProduct.description || !newProduct.weight || !newProduct.price) {
      setWarningMessage("All fields are required");
      setWarning(true);
      return;
    } else {
      setWarning(false);
      try {
        await addProduct({
          variables: {
            input: newProduct,
          },
        });
        await refetch();
      } catch (error) {
        setWarningMessage(error.message);
        setWarning(true);
        return;
      }
      dispatch(
        changeInputValue("CHANGE_NEW_PRODUCT_INPUTS", "", "description")
      );
      dispatch(changeInputValue("CHANGE_NEW_PRODUCT_INPUTS", "", "weight"));
      dispatch(changeInputValue("CHANGE_NEW_PRODUCT_INPUTS", "", "price"));
      handleClose();
    }
  };

  const deleteProduct = async (id) => {
    try {
      await removeProduct({
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
    <NavBar>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={warning}>
        <Alert onClose={() => setWarning(false)} severity="error">
          {warningMessage}
        </Alert>
      </Snackbar>
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
          <button
            onClick={handleClose}
            className="default-btn modal-btn cancel-btn"
          >
            Cancel
          </button>
          <button
            onClick={createProduct}
            disabled={isDisabled}
            className="default-btn modal-btn"
          >
            Add
          </button>
        </div>
      </Dialog>
      <div className="container">
        <div className="main-box">
          <h1>Select products</h1>
          <div></div>
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
                  <TableCell align="right">
                    <h2>Actions</h2>
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
                    <TableCell align="right">
                      <button
                        className="action-btn"
                        onClick={() => deleteProduct(el.id)}
                      >
                        <DeleteIcon />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="new-product-btn">
                    <Button onClick={handleOpen}>
                      <AddIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "25px 50px 25px",
            }}
          >
            <button
              onClick={() => Router.push("/main")}
              className="default-btn table-btn cancel-btn"
            >
              Cancel
            </button>
            <button
              onClick={() => createNewPurchase()}
              className="default-btn table-btn"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </NavBar>
  );
};
export default Post;
