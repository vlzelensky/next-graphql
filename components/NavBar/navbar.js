import Router from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Breadcrumbs, Typography } from "@material-ui/core";

export default function NavBar({ children }) {
  const logOut = () => {
    Router.push("/");
  };

  const userName = useSelector(
    (globalState) => globalState.userData.user.email
  );

  return (
    <>
      <nav className="nav-bar">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "30%",
          }}
        >
          <h1
            onClick={() => Router.push("/main")}
            style={{ cursor: "pointer" }}
          >
            Shop-project
          </h1>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/main">
              Home
            </Link>
            <Link color="inherit" href="/user-page">
              User Page
            </Link>
          </Breadcrumbs>
        </div>
        <span>{userName}</span>
        <button className="default-btn" onClick={logOut}>
          Log Out
        </button>
      </nav>
      <main>{children}</main>
    </>
  );
}
