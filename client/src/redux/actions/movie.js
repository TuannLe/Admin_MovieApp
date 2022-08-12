import * as TYPES from '../constants/movie'

// Add movie
export const addMovieStart = (payload) => {
    return {
        type: TYPES.ADD_MOVIE_START,
        payload
    }
}

export const addMovieSuccess = (payload) => {
    return {
        type: TYPES.ADD_MOVIE_SUCCESS,
        payload
    }
}

export const addMovieFailure = (error) => {
    return {
        type: TYPES.ADD_MOVIE_FAILURE,
        error
    }
}

// Get movies
export const getMoviesStart = (payload) => {
    return {
        type: TYPES.GET_MOVIES_START,
        payload
    }
}

export const getMoviesSuccess = (payload) => {
    return {
        type: TYPES.GET_MOVIES_SUCCESS,
        payload
    }
}

export const getMoviesFailure = (error) => {
    return {
        type: TYPES.GET_MOVIES_FAILURE,
        error
    }
}

// Get movies by category
export const getMoviesByCategoryStart = (payload) => {
    return {
        type: TYPES.GET_MOVIES_BY_CATEGORY_START,
        payload
    }
}

export const getMoviesByCategorySuccess = (payload) => {
    return {
        type: TYPES.GET_MOVIES_BY_CATEGORY_SUCCESS,
        payload
    }
}

export const getMoviesByCategoryFailure = (error) => {
    return {
        type: TYPES.GET_MOVIES_BY_CATEGORY_FAILURE,
        error
    }
}

// Get link movie
export const getLinkMovieStart = (payload) => {
    return {
        type: TYPES.GET_LINK_MOVIE_START,
        payload
    }
}

export const getLinkMovieSuccess = (payload) => {
    return {
        type: TYPES.GET_LINK_MOVIE_SUCCESS,
        payload
    }
}

export const getLinkMovieFailure = (err) => {
    return {
        type: TYPES.GET_LINK_MOVIE_FAILURE,
        err
    }
}

// Search movies
export const searchMoviesStart = (payload) => {
    return {
        type: TYPES.SEARCH_MOVIES_START,
        payload
    }
}

export const searchMoviesSuccess = (payload) => {
    return {
        type: TYPES.SEARCH_MOVIES_SUCCESS,
        payload
    }
}

export const searchMoviesFailure = (error) => {
    return {
        type: TYPES.SEARCH_MOVIES_FAILURE,
        error
    }
}

// Update movie
export const updateMovieStart = (payload) => {
    return {
        type: TYPES.UPDATE_MOVIE_START,
        payload
    }
}

export const updateMovieSuccess = (payload) => {
    return {
        type: TYPES.UPDATE_MOVIE_SUCCESS,
        payload
    }
}

export const updateMovieFailure = (error) => {
    return {
        type: TYPES.UPDATE_MOVIE_FAILURE,
        error
    }
}

// Delete movie
export const deleteMovieStart = (payload) => {
    return {
        type: TYPES.DELETE_MOVIE_START,
        payload
    }
}

export const deleteMovieSuccess = (payload) => {
    return {
        type: TYPES.DELETE_MOVIE_SUCCESS,
        payload
    }
}

export const deleteMovieFailure = (error) => {
    return {
        type: TYPES.DELETE_MOVIE_FAILURE,
        error
    }
}