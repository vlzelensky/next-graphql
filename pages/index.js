import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_TOKEN } from "../query/user";
import { changeInputValue, setUser } from "../redux/actions";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
const LogIn = () => {
  const [vertical] = useState("top");
  const [horizontal] = useState("center");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const dispatch = useDispatch();
  const { emailValue, passwordValue } = useSelector(
    (globalState) => globalState.userData
  );
  const [getToken, { called, data, loading, error }] = useLazyQuery(GET_TOKEN);

  useEffect(() => {
    if (called && !loading) {
      if (error) {
        setWarningMessage(error.message);
        setWarning(true);
      } else {
        Router.push("/main");
      }
    }
  }, [data, called, loading]);

  const logIn = async () => {
    if (!emailValue && !passwordValue) {
      setWarningMessage("Please enter your email address and password");
      setWarning(true);
    } else {
      if (!emailValue) {
        setWarningMessage("Please enter your email address");
        setWarning(true);
      }
      if (!passwordValue) {
        setWarningMessage("Please enter your password");
        setWarning(true);
      } else {
        getToken({
          variables: {
            email: emailValue,
            password: passwordValue,
          },
        });
      }
    }
  };
  return (
    <>
      <Head>
        <title>Shop-project | Login</title>
      </Head>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={warning}>
        <Alert onClose={() => setWarning(false)} severity="error">
          {warningMessage}
        </Alert>
      </Snackbar>

      <div className="login-box">
        <div className="login-content">
          <h1>Login Form</h1>
          {loading && <span>loading...</span>}
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
          <button className="default-btn" onClick={logIn}>
            login
          </button>
          <h2>
            Not a member? <Link href="/signup">Signup now</Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default LogIn;
