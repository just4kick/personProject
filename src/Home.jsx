import "./cssfile/home.css"
import homeimage from "./assets/homeimage.png"


function Home() {

    let photolink = "https://picsum.photos/500";

  return (
    
    <>
    {/* home page text */}
      <div className="home-container">
        <div className="home-text">
          <h1>Hello,</h1>
          <p>I am Sumit, a dedicated web developer with a profound passion for crafting immersive online experiences. My journey in the realm of web development has been driven by a fascination with code and an unwavering commitment to transform creative ideas into digital reality.</p>
          <button type="button" onClick={()=>{
            window.location.href = "google.com"
          }}>MY PROJECT</button>
        </div>
{/* image is of the home page */}
        <div className="home-image">
            <img src={homeimage} alt="random image" />
            </div>
      </div> 
      
    </>
  )
}
export default Home;