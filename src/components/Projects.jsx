import React from 'react'
import pong from 'assets/pong-screenshot.png'
import jsLinn from 'assets/js-linn-screenshot.png'
import ticTacToe from 'assets/tictactoe.png'
import sketchJs from 'assets/sketch-js-screenshot.png'
import sketch3 from 'assets/sketch3.png'
const Projects = () => {
  return (
    <div>
      <div>
        <h1 className="projects-header">my projects</h1>
      </div>
      <div className="container">
        <a target="_blank" href="https://mcidoni.github.io/pong.js/" className="item">
          <img src={pong} alt="pong game"/>
          <h1>pong.js</h1>
        </a>
        <a target="_blank" href="https://raw.githack.com/mcidoni/JS-Linn/main/JS%20LINN/index-START.html" className="item">
          <img src={jsLinn} alt="javascript beatpad"/>
          <h1>js linn</h1>
        </a>
        <a target="_blank" href="https://mcidoni.github.io/MC-Triple-T-client/" className="item">
          <img src={ticTacToe} alt="tic tac toe game"/>
          <h1>tic tac toe</h1>
        </a>
        <a target="_blank" href="https://mcidoni.github.io/etch-a-sketch.js/" className="item">
          <img src={sketch3} alt="etch a sketch game"/>
          <h1>sketch.js</h1>
        </a>
      </div>
      <div>
        <h5 className="copyright">© cidonicode 2021</h5>
      </div>
    </div>
    
  )
}

export default Projects
