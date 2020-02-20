import React, { Component, Fragment } from 'react'
import { botwDetails } from '../services/botw'
import { capitalize } from '../helpers'

import Card from '../ui/Card'

export const withDetails = (type, WrappedComponent) => {
  return class extends Component {
    state = {
      details: {}
    }

    async componentDidMount() {
      const { match: { params } } = this.props
      const itemName = params.recipeName || params.materialName
      const details = await botwDetails[type](itemName)
      this.setState({ details })
    }

    render() {
      const { details } = this.state
      return (
        <Fragment>
          <Card
            path={type}
            text={capitalize(type)}
            extraClass='centered fixed item small hover link' />
          <WrappedComponent {...details} />
        </Fragment>
      )
    }
  }
}