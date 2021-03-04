import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInputValue, clearNewUserInputs } from "../redux/actions";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../mutations/user";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
export default function registration() {
  const { firstName, lastName, email, password } = useSelector(
    (globalState) => globalState.userData.newUser
  );
  const [vertical] = useState("top");
  const [horizontal] = useState("center");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { newUser } = useSelector((globalState) => globalState.userData);
  const [addUser] = useMutation(CREATE_USER);
  console.log(repeatPassword);

  const createUser = async () => {
    if (!firstName || !lastName || !email || !password || !repeatPassword) {
      setWarningMessage("All fields are required");
      setWarning(true);
      return;
    }
    if (password !== repeatPassword) {
      setWarningMessage("Passwords don't match");
      setWarning(true);
      return;
    }

    await addUser({
      variables: {
        input: newUser,
      },
    });
    goToLogin();
    dispatch(clearNewUserInputs());
  };
  const dispatch = useDispatch();
  const goToLogin = () => Router.push("/");
  return (
    <>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={warning}>
        <Alert onClose={() => setWarning(false)} severity="error">
          {warningMessage}
        </Alert>
      </Snackbar>
      <div className="login-box">
        <div className="login-content">
          <h1>Registration</h1>
          <span>First name</span>
          <input
            value={firstName}
            onChange={(event) =>
              dispatch(
                changeInputValue(
                  "CHANGE_NEW_USER_INPUTS",
                  event.target.value,
                  "firstName"
                )
              )
            }
          ></input>
          <span>Last name</span>
          <input
            value={lastName}
            onChange={(event) =>
              dispatch(
                changeInputValue(
                  "CHANGE_NEW_USER_INPUTS",
                  event.target.value,
                  "lastName"
                )
              )
            }
          ></input>
          <span>Email</span>
          <input
            value={email}
            onChange={(event) =>
              dispatch(
                changeInputValue(
                  "CHANGE_NEW_USER_INPUTS",
                  event.target.value,
                  "email"
                )
              )
            }
          ></input>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) =>
              dispatch(
                changeInputValue(
                  "CHANGE_NEW_USER_INPUTS",
                  event.target.value,
                  "password"
                )
              )
            }
          ></input>
          <span>Repeat Password</span>
          <input
            type="password"
            value={repeatPassword}
            onChange={(event) => setRepeatPassword(event.target.value)}
          ></input>
          <button onClick={goToLogin}>back</button>
          <button onClick={createUser}>register</button>
        </div>
      </div>
    </>
  );
}
