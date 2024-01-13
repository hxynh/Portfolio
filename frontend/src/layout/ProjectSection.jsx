/*import { useEffect, useState } from "react";*/
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

    return (
        <div className={classes.projectTiles}>
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
    )
}

export async function loader() {
    try {
        const response = await axios.get('/api/projects');
        return response.data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}