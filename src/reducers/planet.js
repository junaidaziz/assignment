import {
  RECEIVE_PLANET_DETAIL,
  REQUEST_PLANET_DETAIL
} from '../constants'


export function planet(state = {}, action) {
  switch (action.type) {
    case REQUEST_PLANET_DETAIL:
      return {
        planetDetailLoaded: false
      }
    case RECEIVE_PLANET_DETAIL:
      return {
        planetDetailLoaded: true,
        planetDetail: action.data
      }
    default:
      return state;
  }
}
