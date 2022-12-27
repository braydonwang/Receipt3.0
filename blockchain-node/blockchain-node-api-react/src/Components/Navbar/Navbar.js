import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={classes.navbarContainer}>
      <ul className={classes.optionContainer}>
        <li>
          <Link to="/">
            <span className={classes.navbarOption}>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <span className={classes.navbarOption}>Products</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
