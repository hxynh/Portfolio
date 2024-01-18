import profileImg from "../assets/nancyhou.png";
import Slider from "../components/Slider.jsx";
import classes from "./styles/About.module.css";
import {saveAs} from "file-saver";
import resume from '../assets/Resume.docx'


export default function AboutMe() {

    return (
        <article className={classes.details}>
            <img className={classes.profilePic} src={profileImg} alt="profileImg"></img>
            <div className={classes.aboutMe}>
                <h2 className={classes.header}>A little bit about me</h2>
                <Slider />
                <button 
                    onClick={() => saveAs(resume, 'NancyResume.docx')}
                    className={classes.saveBtn}>
                    Download Resume
                </button>
                
            </div>
            
            
        </article>
    )
}