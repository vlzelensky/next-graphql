import { useState } from "react";
import Router from "next/router";
export default function registration() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("null");
  const [password, setpassword] = useState("null");
  const [repeatPassword, setRepeatPassword] = useState("null");
  const goToLogin = () => Router.push("/");
  return (
    <>
      <div className="login-box">
        <div className="login-content">
          <h1>Registration</h1>
          <span>Name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <span>Email</span>
          <input></input>
          <span>Password</span>
          <input></input>
          <span>Repeat Password</span>
          <input></input>
          <button onClick={goToLogin}>back</button>
          <button>register</button>
        </div>
      </div>
    </>
  );
}
