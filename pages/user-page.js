import NavBar from "../components/NavBar/navbar.js";

export default function userPage() {
  return (
    <NavBar>
      <div className="login-box">
        <div className="login-content">
          <h1>User Page</h1>
          <span>First Name</span>
          <input></input>
          <span>Last Name</span>
          <input></input>
          <span>Email</span>
          <input></input>
          <span>Password</span>
          <input type="password"></input>
          <button className="default-btn"></button>
        </div>
      </div>
    </NavBar>
  );
}
