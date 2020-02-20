import React from 'react'
import { Link } from 'react-router-dom'
import { withContainer } from '../hocs/withContainer'

const Recipes = ({ list }) =>
  <ul>
    {
      list.map((item, index) =>
        <li key={index}>
          <Link to={`recipes/${Object.keys(item)}`} className="item medium link hover">
              <img src={Object.values(item)} />
              <h3>{Object.keys(item)}</h3>
          </Link>
        </li>
      )
    }
  </ul>

export default withContainer('recipes', Recipes)