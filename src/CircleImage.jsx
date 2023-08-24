import "./cssfile/circleImage.css"
function CircleImage(props)
{
    return (
        <div className="circle-image">
            <img src={props.src} alt={props.alt} />
        </div>
    );
}
export default CircleImage;