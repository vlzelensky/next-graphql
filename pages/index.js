import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeInputValue } from "../redux/actions";
import Link from "next/link";
import Router from "next/router";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
export default function LogIn() {
  const [vertical] = useState("top");
  const [horizontal] = useState("center");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const dispatch = useDispatch();
  const { emailValue, passwordValue } = useSelector(
    (globalState) => globalState.purchases
  );
  const logIn = () => {
    if (emailValue === "" && passwordValue === "") {
      console.log("----------1", 1);
      setWarningMessage("Please enter your email address and password");
      setWarning(true);
    } else {
      if (emailValue === "") {
        setWarningMessage("Please enter your email address");
        setWarning(true);
      }
      if (passwordValue === "") {
        setWarningMessage("Please enter your password");
        setWarning(true);
      }
    }
  };
  const onError = () => {};
  return (
    <>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={warning}>
        <Alert onClose={() => setWarning(false)} severity="error">
          {warningMessage}
        </Alert>
      </Snackbar>

      <div className="login-box">
        <div className="login-content">
          <h1>Login Form</h1>
          <p>Email</p>
          <input
            value={emailValue}
            onChange={(event) =>
              dispatch(
                changeInputValue("CHANGE_EMAIL_VALUE", event.target.value)
              )
            }
          ></input>
          <p>Password</p>
          <input
            value={passwordValue}
            onChange={(event) =>
              dispatch(
                changeInputValue("CHANGE_PASSWORD_VALUE", event.target.value)
              )
            }
            type="password"
          ></input>
          <span>
            <Link href="/password-reset">Forgot Password?</Link>
          </span>
          <button onClick={logIn}>login</button>
          <h2>
            Not a member? <Link href="/signup">Signup now</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
