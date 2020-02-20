import React, { Component } from 'react'
import { getMaterials } from '../services/botw'

import Materials from '../ui/Materials'

class MaterialsContainer extends Component {
  state = {
    list: []
  }

  async componentDidMount() {
    const list = await getMaterials()
    this.setState({ list })
  }

  render() {
    return <Materials list={this.state.list} />
  }
}

export default MaterialsContainer