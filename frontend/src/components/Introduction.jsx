import classes from "./styles/Introduction.module.css";
import { useNavigate } from "react-router-dom";
import {  motion } from "framer-motion";

export default function Introduction({scrollYProgress}) {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("about-me");
    }

    return (
        <main>
            <h3 >Hello! I am Nancy Hou, <br/> a Front-End Developer based in <br/>Toronto, Ontario</h3>

            <button onClick={navigateHandler} className={classes.aboutBtn}>Learn More</button>
        </main>
    )
}