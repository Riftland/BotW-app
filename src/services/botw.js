import axios from 'axios'
import {
  API_URL, MATERIALS_URL, RECIPES_URL, RECIPES_KEY, MATERIALS_KEY
} from './constants'

const catcher = async fn => {
  try {
    return (await fn()).data
  } catch(error) {
    return []
  }
}

const getMaterials = _ =>
  catcher(() => axios.get(`${API_URL}${MATERIALS_URL}`))

const getRecipes = _ =>
  catcher(() => axios.get(`${API_URL}${RECIPES_URL}`))

const getMaterialDetails = material =>
  catcher(() => axios.get(`${API_URL}${MATERIALS_URL}${material}`))

const getRecipeDetails = recipe =>
  catcher(() => axios.get(`${API_URL}${RECIPES_URL}${recipe}`))


export const botwList = {
  [RECIPES_KEY]: getRecipes,
  [MATERIALS_KEY]: getMaterials
}

export const botwDetails = {
  [RECIPES_KEY]: getRecipeDetails,
  [MATERIALS_KEY]: getMaterialDetails
}

