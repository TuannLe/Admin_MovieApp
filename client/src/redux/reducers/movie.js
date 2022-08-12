import { INIT_STATE } from '../constants'
import * as TYPES from '../constants/movie'

export default function movieReducer(state = INIT_STATE.movie, action) {
    switch (action.type) {
        // Add movie
        case TYPES.ADD_MOVIE_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.ADD_MOVIE_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
                message: 'Add movie successfully',
                error: false
            }
        case TYPES.ADD_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: 'Add movie failed',
                error: true
            }
        // Get movies
        case TYPES.GET_MOVIES_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.GET_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Get movies by category
        case TYPES.GET_MOVIES_BY_CATEGORY_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.GET_MOVIES_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                moviesByCategory: action.payload,
                error: false
            }
        case TYPES.GET_MOVIES_BY_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Get link movie
        case TYPES.GET_LINK_MOVIE_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.GET_LINK_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                linksMovie: action.payload,
                error: false
            }
        case TYPES.GET_LINK_MOVIE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: true
            }
        }
        // Search movies
        case TYPES.SEARCH_MOVIES_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                searchMovies: action.payload,
                error: false
            }
        case TYPES.SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Update movie
        case TYPES.UPDATE_MOVIE_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.UPDATE_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.payload,
                error: false
            }
        case TYPES.UPDATE_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Delete movies
        case TYPES.DELETE_MOVIE_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.DELETE_MOVIE_SUCCESS:
            const newListMovie = [...state.movies]
            newListMovie.splice(newListMovie.findIndex((item) => {
                return item._id === action.payload.movieId
            }), 1)
            return {
                ...state,
                isLoading: false,
                movies: newListMovie,
                error: false
            }
        case TYPES.DELETE_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}
