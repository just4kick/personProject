import "./cssfile/projectTextbox.css"
function ProjectTextbox(props)
{
    return(
        <div className="projectText-container">
            {/* this is text inside the container */}
            <div className="projectText-text">
            <p>{props.text}</p>
            </div>
            {/* this is button inside projectText-container */}
            <div className="projectText-button">
            <button>View</button>
            <button>Code</button>
            </div>
        </div>
    )
}
export default ProjectTextbox;