import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import todoReducer from './todoReducer'

const reducer= combineReducers({
    todos:todoReducer,
    filters:filterReducer
})

export default reducer