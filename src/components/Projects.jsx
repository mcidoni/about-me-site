import React from 'react'
import pong from 'assets/pong-screenshot.png'

const Projects = () => {
  return (
    <div>
      <div>
        {/* <p className="placeholder">🚧 under construction, check back soon! 🚧</p> */}
        <h1 className="projects-header">my projects</h1>
      </div>
      <div className="container">
        <a target="_blank" href="https://mcidoni.github.io/pong.js/" className="item">
          <img src={pong} alt="pong game"/>
          <h1>pong.js</h1>
        </a>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
    
  )
}

export default Projects
