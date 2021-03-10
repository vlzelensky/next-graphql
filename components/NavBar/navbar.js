import Router from "next/router";
import Link from "next/link";
import { Breadcrumbs, Typography } from "@material-ui/core";

export default function NavBar({ children }) {
  const logOut = () => {
    Router.push("/");
  };

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

        <button onClick={logOut}>Log Out</button>
      </nav>
      <main>{children}</main>
    </>
  );
}
