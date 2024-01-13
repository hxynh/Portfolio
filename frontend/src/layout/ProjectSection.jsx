import classes from "./styles/ProjectSection.module.css";
import ProjectTile from "../components/ProjectTile";
export default function ProjectSection () {
    return (
        <div className={classes.projectTiles}>
            <ProjectTile 
                imgSrc="https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg"
                projectName="Youtube Clone"
                description="Experience seamless browsing with interactive video tiles that autoplay on hover, giving you a sneak peek into each video. Our dynamic menu bar elegantly displays icons, expanding to reveal clear icon labels upon interaction. Utilizing the power of the YouTube API, our page fetches video data, allowing easy access to a wide array of content. Enhancing navigation, category tabs enable swift filtering for specific video genres. Plus, our intuitive search bar efficiently sifts through video results, ensuring a tailored viewing experience."
                id="id1"/>
            <ProjectTile 
                imgSrc="https://media.idownloadblog.com/wp-content/uploads/2014/04/iOS-7-Weather-app-Adding.gif"
                projectName="Weather App"
                description="Discover and create memorable gatherings effortlessly with our meetup platform. Seamlessly organize events by adding new meetups through a user-friendly form, capturing crucial details like location, name, description, and images to entice attendees. Once added, these meetups take center stage on our main page, showcasing a comprehensive list of upcoming events. Easily peruse the available meetups and dive deeper into specifics with a convenient 'View Details' button, empowering users to explore event particulars at their convenience"
                id= "id2"
                />
        </div>
    )
}