import { useRef, useState } from "react";
import classes from "./styles/ProjectTile.module.css";
import ProjectModal from "./ProjectModal";

export default function ProjectTile({imgSrc, projectName, description, codeURL, vercelURL}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
        <div className={classes.tileSection}>
            <img src={imgSrc} alt="project" className={classes.projectImg} onClick={openModal}/>
            <h2 className={classes.name}>{projectName}</h2>
            <ProjectModal 
                name={projectName}  
                isOpen={isModalOpen} 
                onClose={closeModal}>
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
            </ProjectModal>
        </div>
        </>

    )
}