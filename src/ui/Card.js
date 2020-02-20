import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ text = '', path = '', extraClass = '' }) =>
  <Link to={`/${path}`} className={extraClass}>
    <h2>{text}</h2>
  </Link>

export default Card
