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

// Import React Router things.
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



// Mount our app.
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.querySelector('#app')
)
