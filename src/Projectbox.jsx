import "./cssfile/projectbox.css";
import Avatar from '@mui/material/Avatar';


function Projectbox(props)
{
    return(
        
        <div className="projectText-container">
         <div className="projectText-avatar">
         <Avatar
                alt={props.alt}
                src={props.src}
                sx={{ width: 80, height: 80 , border: "1px solid black", borderRadius: "20%"}}
            />
         </div>
         <div className="projectText-text">
           <p>{props.text}</p> 
           <div className="projectText-links">
           <a href={props.codeLink}>CODE</a>
           <a href={props.viewLink}>VIEW</a>
           </div>
            </div>
            </div>
        
        
    )
}
export default Projectbox;