import Link from "next/link";
import Router from "next/router";
export default function LogIn() {
  const logIn = () => {
    Router.push("/main");
  };
  return (
    <>
      <div className="login-box">
        <div className="login-content">
          <h1>Login Form</h1>
          <p>Email</p>
          <input></input>
          <p>Password</p>
          <input></input>
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
