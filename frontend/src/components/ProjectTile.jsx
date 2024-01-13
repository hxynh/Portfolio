import classes from "./styles/ProjectTile.module.css";
import { useNavigate } from "react-router-dom";

export default function ProjectTile({imgSrc, projectName, description, id}) {
    const navigate = useNavigate();

    return (
        <div className={classes.tileSection}>
            <img src={imgSrc} alt="project" className={classes.projectImg}/>
            <h2 className={classes.name}>{projectName}</h2>
            <a 
                className={classes.detailBtn} 
                href="https://youtube-clone-indol-zeta.vercel.app/"
                target="_blank">View Site</a>
            <a 
                className={classes.detailBtn} 
                href="https://nextjs-demo-pink-ten.vercel.app/"
                target="_blank">View Code</a>
            <p>{description}</p>
        </div>
    )
}