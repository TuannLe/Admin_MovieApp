import { combineReducers } from 'redux'
import auth from './auth'
import category from './category'
import movie from './movie'

export default combineReducers({
    auth,
    category,
    movie
})