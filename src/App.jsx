import { useState } from 'react'
import './cssfile/App.css'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Project from './Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Nav></Nav>
  <Home></Home>
  <Project src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Project" text="Desktop application for managing literature references using modern Java features including JavaFX. Dedicated to code quality and constructive feedback: Each Pull Request is reviewed by two developers to provide high-quality feedback and to ensure high quality of new contributions."></Project>
  <Project src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Project" text="Desktop application for managing literature references using modern Java features including JavaFX. Dedicated to code quality and constructive feedback: Each Pull Request is reviewed by two developers to provide high-quality feedback and to ensure high quality of new contributions."></Project>
  <Project src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Project" text="Desktop application for managing literature references using modern Java features including JavaFX. Dedicated to code quality and constructive feedback: Each Pull Request is reviewed by two developers to provide high-quality feedback and to ensure high quality of new contributions."></Project>
  
  <About></About>
    </>
  )
}

export default App
