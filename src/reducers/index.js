import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { app } from './app'
import { planet } from './planet'

const rootReducer = combineReducers({ app, planet })

export default rootReducer
