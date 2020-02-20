import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Materials from './ui/Materials'
import Recipes from './ui/Recipes'
import MaterialDetails from './ui/MaterialDetails'
import RecipeDetails from './ui/RecipeDetails'
import Home from './ui/Home'

const App = _ =>
  <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/materials' component={Materials} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/materials/:materialName' component={MaterialDetails} />
        <Route exact path='/recipes/:recipeName' component={RecipeDetails} />
      </Switch>
    </Router>
  </div>

export default App
