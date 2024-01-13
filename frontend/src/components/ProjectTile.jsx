import classes from "./styles/ProjectTile.module.css";

export default function ProjectTile({imgSrc, projectName, description, codeURL, vercelURL}) {
    return (
        <div className={classes.tileSection}>
            <img src={imgSrc} alt="project" className={classes.projectImg}/>
            <h2 className={classes.name}>{projectName}</h2>
            <a 
                className={classes.detailBtn} 
                href={vercelURL}
                target="_blank">View Site</a>
            <a 
                className={classes.detailBtn} 
                href={codeURL}
                target="_blank">View Code</a>
            <p>{description}</p>
        </div>
    )
}