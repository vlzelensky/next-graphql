import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPurchase } from "../redux/actions";
import Router from "next/router";
import NavBar from "../components/NavBar/navbar.js";
import Purchase from "../components/Purchase/index.js";
import { Dialog, DialogActions } from "@material-ui/core";
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

  const { purchases } = useSelector((globalState) => globalState.purchases);

  const dispatch = useDispatch();

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
    dispatch(createPurchase(purchase));
    clearModalInputs();
    closeModal();
  };

  return (
    <NavBar>
      <div className="container">
        <div className="main-box">
          <Dialog className="modal" open={open} onClose={closeModal}>
            <h1>Add new purchase</h1>
            <span>Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></input>
            <span>Date</span>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk="true"
                margin="normal"
                format="dd/MM/yyyy"
                value={date}
                onChange={selectDate}
              />
            </MuiPickersUtilsProvider>
            <div style={{ width: "40%" }} className="modal-buttons">
              <button className="gradient-btn" onClick={closeModal}>
                close
              </button>
              <button
                className="gradient-btn"
                onClick={() => {
                  addNewPurchase({
                    id: purchases.length + 1,
                    title: title,
                    date: new Date(date),
                  });
                }}
              >
                add
              </button>
            </div>
          </Dialog>
          <h2>Purchases</h2>
          <button className="gradient-btn" onClick={openModal}>
            Add purchase
          </button>
          {purchases.length > 0 && <Purchase />}
        </div>
      </div>
    </NavBar>
  );
};

export default Main;
