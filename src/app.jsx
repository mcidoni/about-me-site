/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
  Be sure to adjust the `browserslist` field in your `package.json` file.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

// Import our top-level sass file.
import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our components.
import Home from 'components/Home'
import NotFound from 'components/NotFound'
import About from 'components/About'
import Github from 'components/Github'

// Import React Router things.
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Projects from './components/Projects'


// Mount our app.
ReactDOM.render(
  <Router>
     <header className="pv1 bg-black white-95 df justify-end f-2rem b pa4">
        {/* <h1 className="mt0 mb1 tc">Matt Cidoni</h1> */}
        {/* <div className="tc ttc">Coder Extraordinnaire</div> */}
        <Link to="/" className="ml6 hp-link name">matthew cidoni</Link>
        <Link to="/about" className="ml6 hp-link about">about me</Link>
        <Link to="/projects" className="ml6 hp-link projects">projects</Link>
        <Link to="/github" className="ml6 hp-link github">github</Link>
      </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/github" component={Github} />
       */}.
       <Route path='/github' component={() => { 
        window.location.href = 'https://github.com/mcidoni'; 
        return null;
        }}/>
      <Route exact path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.querySelector('#app')
)
