import { Link, useLocation } from "react-router-dom";
import classes from "./styles/TopNavBar.module.css"

export default function TopNavBar() {
   const location = useLocation();

  return (
    <header className={classes.header}>
        <div>
            <Link to='/'><strong>Nancy</strong>Hou</Link>
        </div>
        <ul>
            <li>
                <Link to='/' className={location.pathname === "/" ? classes.active : ""}>Home</Link>
            </li>
            <li>
                <Link to='about-me' className={location.pathname === "/about-me" ? classes.active : ""}>About Me</Link>
            </li>
            <li>
                <Link to='contact' className={location.pathname === "/contact" ? classes.active : ""}>Let's connect</Link>
            </li>
        </ul>
    </header>
  )
}
