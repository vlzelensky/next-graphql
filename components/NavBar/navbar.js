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
        <h1 onClick={() => Router.push("/main")} style={{ cursor: "pointer" }}>
          Shop-project
        </h1>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="">
            Home
          </Link>
          <Link color="inherit" href="">
            User Page
          </Link>
        </Breadcrumbs>

        <button onClick={logOut}>Log Out</button>
      </nav>
      <main>{children}</main>
    </>
  );
}
