import React from 'react'
import { Link } from 'react-router-dom'
import { withDetails } from '../hocs/withDetails'

const MaterialDetails = ({ material, pic, location, recipes = [] }) =>
  <div className="details">
    <div className="item-info">
      <img src={pic} />
      <h2>{material}</h2>
    </div>
    <q>{location}</q>
    <ul>
      {
        recipes.map((recipe, index) =>
          <li key={index}>
            <Link to={`/recipes/${Object.keys(recipe)}`} className="item medium link hover">
                <img src={Object.values(recipe)} />
                <h3>{Object.keys(recipe)}</h3>
            </Link>
          </li>
        )
      }
    </ul>
  </div>

export default withDetails('materials', MaterialDetails)