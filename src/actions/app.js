import { combineReducers } from 'redux'
import axios from 'axios'
import {
  REQUEST_USERS,
  RECEIVE_USERS,
  RECEIVE_PLANET_DETAIL,
  REQUEST_PLANET_DETAIL
} from '../constants'

export function getUsers(usersUrl) {
  return function(dispatch, getStore) {
    dispatch(requestLoadUsers())
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.get(usersUrl).then(response => {
      dispatch(setUserData(response))
    }).catch(err => {
     console.log(err)
    })

  }
}

export function getPlanetDetail(planetUrl) {
  return function(dispatch, getStore) {
    dispatch(requestPlanetDetail())
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.get(planetUrl).then(response => {
      dispatch(setPlanetDetail(response.data))
    }).catch(err => {
     console.log(err)
    })
  }
}

export function requestPlanetDetail() {
  return {
    type: REQUEST_PLANET_DETAIL
  }
}


export function setPlanetDetail(data) {
  return {
    type: RECEIVE_PLANET_DETAIL,
    data: data,
  }
}

export function requestLoadUsers() {
  return {
    type: REQUEST_USERS
  }
}


export function setUserData(data) {
  return {
    type: RECEIVE_USERS,
    data: data,
  }
}
