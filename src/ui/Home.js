import React from 'react'
import Card from './Card'

const Home = _ =>
  <div className="main-container">
    <Card path='materials' text='Materials' extraClass='main-link hover big'/>
    <Card path='recipes' text='Recipes' extraClass='main-link hover big'/>
  </div>

export default Home