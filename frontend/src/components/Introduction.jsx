import classes from "./styles/Introduction.module.css";
import { useNavigate } from "react-router-dom";
import { motion, useTransform } from "framer-motion";

export default function Introduction({scrollYProgress}) {
    const navigate = useNavigate();
    const textY = useTransform(scrollYProgress, [0,1], ["0%", "180%"]);
    
    function navigateHandler() {
        navigate("about-me");
    }

    return (
        <main>
            <motion.h3 style={{y:textY}}>Hello! I am Nancy Hou, <br/> a Front-End Developer based in <br/>Toronto, Ontario</motion.h3>

            <button onClick={navigateHandler} className={classes.aboutBtn}>Learn More</button>
        </main>
    )
}