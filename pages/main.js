import { useState, useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { createCurrentPurchase, addPurchases } from "../redux/actions";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PURCHASES } from "../query/purchases";
import Router from "next/router";
import NavBar from "../components/NavBar/navbar.js";
import Purchase from "../components/Purchase/index.js";
import { Dialog } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(Date.now());

  const { data, loading, getError, refetch } = useQuery(GET_PURCHASES);

  const { purchases } = useSelector((globalState) => globalState.purchases);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(addPurchases(data));
    }
  }, [data]);

  const closeModal = () => {
    setOpen(false);
    clearModalInputs();
  };
  const openModal = () => setOpen(true);

  const clearModalInputs = () => {
    setDate(Date.now());
    setTitle("");
  };

  const selectDate = (date) => {
    setDate(date);
  };

  const addNewPurchase = (purchase) => {
    if (!title || !date) {
      return;
    }
    Router.push("/purchase/" + purchase.id);
    dispatch(createCurrentPurchase(purchase));
    clearModalInputs();
    closeModal();
  };

  return (
    <>
      <Head>
        <title>Shop-project | Home page</title>
      </Head>
      <NavBar>
        <div className="container">
          <div className="main-box">
            <Dialog className="modal" open={open} onClose={closeModal}>
              <h1 style={{ textAlign: "center" }}>Add new purchase</h1>
              <span>Title</span>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              ></input>
              <span>Date</span>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className="date-picker"
                  autoOk="true"
                  margin="normal"
                  format="dd/MM/yyyy"
                  value={date}
                  onChange={selectDate}
                />
              </MuiPickersUtilsProvider>
              <div className="modal-buttons">
                <button
                  className="default-btn modal-btn cancel-btn"
                  onClick={closeModal}
                >
                  close
                </button>
                <button
                  className="default-btn modal-btn"
                  onClick={() => {
                    addNewPurchase({
                      id: purchases.length + 1,
                      title: title,
                      date: new Date(date).toLocaleDateString("ru-RU"),
                    });
                  }}
                >
                  Add
                </button>
              </div>
            </Dialog>
            <h2>Purchases</h2>
            <button
              className="default-btn add-purchase-btn"
              onClick={openModal}
            >
              Add purchase
            </button>
            {purchases.length > 0 && <Purchase refetch={refetch} />}
          </div>
        </div>
      </NavBar>
    </>
  );
};

export default Main;
