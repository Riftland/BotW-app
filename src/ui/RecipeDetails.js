import React from 'react'
import { Link } from 'react-router-dom'
import { withDetails } from '../hocs/withDetails'

const RecipeDetails = ({ recipe, pic, materials = [] }) =>
  <div className="details">
    <div className="item-info">
      <img src={pic} />
      <h2>{recipe}</h2>
    </div>
      {materials.map((arr, index) =>
        <ul key={index} className="details-list">
          {arr.map((material, index) => {
            return (
              <li key={index}>
                <Link to={`/materials/${Object.keys(material)}`} className="item medium link hover">
                    <img src={Object.values(material)} />
                    <h3>{Object.keys(material)}</h3>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
  </div>

export default withDetails('recipes', RecipeDetails)