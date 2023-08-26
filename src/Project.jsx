import "./cssfile/project.css"
import CircleImage from "./CircleImage";
import Projectbox from "./Projectbox";
import "https://cdn.jsdelivr.net/npm/grained@0.0.2/grained.min.js";
function Project(props)
{
   
    return(
        // this is the container for the image and text
        <div className="project-container">
            <span className="project-title">PROJECTS</span>
            <div className="project-collection">
                    <Projectbox src="https://source.unsplash.com/random/300×300" text= "This is blogging website. Developed using Java Sevlet"></Projectbox>
                    <Projectbox src="https://source.unsplash.com/random/300×300" text= "this sfnlk ojjfs jjf jf  ksflknfs skjfskj kjfskjf hgsf  gfs"></Projectbox>
                    <Projectbox src="https://source.unsplash.com/random/300×300" text= "this sfnlk ojjfs jjf jf  ksflknfs skjfskj kjfskjf hgsf  gfs"></Projectbox>
                    <div className="project-viewmore"><a href="#">view more...</a></div>
            </div>
      
       </div>
    )
}
export default Project;