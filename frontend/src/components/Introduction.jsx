import classes from "./styles/Introduction.module.css";
import { useNavigate } from "react-router-dom";

export default function Introduction() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("about-me");
    }

    return (
        <main>
            <h3>Hello! I am</h3>
            <h1>Nancy Hou, a Front-End Developer based in Toronto, Ontario</h1>
            
            <button onClick={navigateHandler} className={classes.aboutBtn}>Learn More</button>
        
        </main>
    )
}