import React, { Component } from 'react'
import { getRecipes } from '../services/botw'

import Recipes from '../ui/Recipes'

class RecipesContainer extends Component {
  state = {
    list: []
  }

  async componentDidMount() {
    const list = await getRecipes()
    this.setState({ list })
  }

  render() {
    return <Recipes list={this.state.list} />
  }
}

export default RecipesContainer