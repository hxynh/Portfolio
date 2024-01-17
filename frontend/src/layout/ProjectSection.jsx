/*import { useEffect, useState } from "react";*/
import { useRef } from "react";
import axios from "axios"; 
import { useLoaderData } from "react-router-dom";
import classes from "./styles/ProjectSection.module.css";
import ProjectTile from "../components/ProjectTile";

export default function ProjectSection () {
    /* Fetching backend API with useEffect
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/projects');
                setProjects(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []) */
    const projects = useLoaderData();

    const projectListRef = useRef();

    const scrollHandler = () => {
        const scrollLeft = projectListRef.current.scrollLeft;
        const maxScrollLeft = projectListRef.current.scrollWidth - projectListRef.current.clientWidth;

        // Show/hide previous button based on scroll position
        const previousButton = document.getElementById('previousButton');
        if (previousButton) {
        previousButton.style.display = scrollLeft === 0 ? 'none' : 'block';
        }

        // Show/hide next button based on scroll position
        const nextButton = document.getElementById('nextButton');
        if (nextButton) {
        nextButton.style.display = scrollLeft === maxScrollLeft ? 'none' : 'block';
        }
    };

    const handlePreviousClick = () => {
        projectListRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
    };

    const handleNextClick = () => {
        projectListRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    };


    return (
        <div className={classes.projectTiles}>
         
            <div className={classes.projectList} ref={projectListRef} onScroll={scrollHandler}>
            {projects.map ( (project) => 
                <ProjectTile 
                    key={project._id}
                    imgSrc={project.img}
                    projectName={project.name}
                    description={project.description}
                    codeURL={project.codeURL}
                    vercelURL={project.vercelURL}/>
                )
            }
      </div>
      <button id="previousButton" className={`${classes.scrollButton} ${classes.previousButton}`} onClick={handlePreviousClick}>
        &lt;
      </button>
      <button id="nextButton" className={`${classes.scrollButton} ${classes.nextButton}`} onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};
         

export async function loader() {
    try {
        const response = await axios.get('/api/projects');
        return response.data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}