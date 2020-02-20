import React, { Component, Fragment } from 'react'
import { botwList } from '../services/botw'

import Card from '../ui/Card'

export const withContainer = (type, WrappedComponent) => {
  return class extends Component {
    state = {
      list: []
    }

    async componentDidMount() {
      const list = await botwList[type]()
      this.setState({ list })
    }

    render() {
      const { list } = this.state
      return (
        <Fragment>
          <Card text='Home' extraClass='centered fixed item small hover link' />
          <WrappedComponent {...{list}} />
        </Fragment>
      )
    }
  }
} 