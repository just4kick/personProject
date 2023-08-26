import { useState } from 'react'
import './cssfile/app.css'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Project from './Project'
import ImgMediaCard from './SwipeableTextMobileStepper'
import "./jsfile/grained.min.js";
import Contact from './Contact'


function App() {
  const [count, setCount] = useState(0)

  var options = {
    animate: true,
    patternWidth: 100,
    patternHeight: 100,
    grainOpacity: 0.07,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1
  };
  grained("#app", options);
  return (
    <div id = "app">
  <Nav></Nav>
  <Home></Home>
<Project></Project>
<Contact action ="google.com"></Contact>
  <About></About>
    </div>
  )
}

export default App
