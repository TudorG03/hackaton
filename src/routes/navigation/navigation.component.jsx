import "./navigation.styles.css";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <nav>
        <Link className="li" to="/">
          <h1>
            CIOROI<span>VILLE</span>
          </h1>
        </Link>
        <ul>
          <Link className="li" to="/dashboard">
            petru
          </Link>

          <Link className="li" to="#">
            nu mai comenta
          </Link>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
