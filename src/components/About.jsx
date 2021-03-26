import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className="abt-header">from humble beginnings...</h1>
      <div className="about-me">
        <p className="abt-info">
          Hey there, I'm Matt! Thanks for checking out my site, I built it myself! As a web developer, I enjoy the challenge of figuring out how to bring peoples' ideas (and my own) to life on the web! I have always been drawn to just about anything creative, and I always enjoy sharing my creativity with others! My journey in web development has been exciting so far, and I am always looking to grow and use my skills to help others. From humble p-tags to bigger-and-badder React apps, I am constantly learning more
          and more about the tools that allow me to put whatever I can think up onto the web for everyone to use!
        </p>
        <p>
          {/* <h1 className="skillz bg-white black b">my skills include:</h1> */}
        </p>
      </div>
      <div>
        <h5 className="copyright">© cidonicode 2021</h5>
      </div>
    </div>

  )
}

export default About
