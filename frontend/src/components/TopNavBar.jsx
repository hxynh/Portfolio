import { Link } from "react-router-dom";

export default function TopNavBar() {
  return (
    <header className="header">
        <div>
            <Link to='/'><strong>Nancy</strong>Hou</Link>
        </div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='about-me'>About Me</Link>
            </li>
            <li>
                <Link to='contact'>Let's connect</Link>
            </li>
        </ul>
    </header>
  )
}
