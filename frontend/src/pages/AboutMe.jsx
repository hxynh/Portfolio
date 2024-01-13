import profileImg from "../assets/nancyhou.png";
import Slider from "../components/Slider.jsx";
import classes from "./styles/About.module.css";

export default function AboutMe() {
    return (
        <article className={classes.details}>
            <img className={classes.profilePic} src={profileImg} alt="profileImg"></img>
            <div className={classes.aboutMe}>
                <h2 className={classes.header}>A little bit about me</h2>
                <Slider />
            </div>
            
            
        </article>
    )
}