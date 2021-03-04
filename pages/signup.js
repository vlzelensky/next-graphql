import { useSelector, useDispatch } from "react-redux";
import { changeInputValue } from "../redux/actions";
import Router from "next/router";
import { Apollo } from "apollo";
export default function registration() {
  const { firstName, lastName, email, password, repeatPassword } = useSelector(
    (globalState) => globalState.userData.newUser
  );
  const dispatch = useDispatch();
  const goToLogin = () => Router.push("/");
  return (
    <>
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
            onChange={(event) =>
              dispatch(
                changeInputValue(
                  "CHANGE_NEW_USER_INPUTS",
                  event.target.value,
                  "repeatPassword"
                )
              )
            }
          ></input>
          <button onClick={goToLogin}>back</button>
          <button>register</button>
        </div>
      </div>
    </>
  );
}
