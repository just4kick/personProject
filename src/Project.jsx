import "./cssfile/project.css"
import CircleImage from "./CircleImage";
import ProjectTextbox from "./ProjectTextbox";
function Project(props)
{
    return(
        // this is the container for the image and text
        <>
        {/* <h1 className="project-title-text">MY PROJECT</h1> */}
        <div className="project-container">
       <CircleImage src={props.src} alt={props.alt}></CircleImage>
       <ProjectTextbox text = {props.text}></ProjectTextbox>
       </div>
       </>
    )
}
export default Project;