import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from '../actions/movie'
import * as apis from '../../apis/movie'
import * as types from '../constants/movie'

function* addMovieSaga(action) {
    try {
        console.log('Add movie running...')
        const res = yield call(apis.addMovie, action.payload)
        if (res.status === 200) {
            console.log('Add movie successfully')
            yield put(actions.addMovieSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.addMovieFailure(error))
    }
}

function* getMoviesSaga(action) {
    try {
        console.log('Get movies running...')
        const res = yield call(apis.getMovies, action.payload)
        if (res.status === 200) {
            console.log('Get movies successfully')
            yield put(actions.getMoviesSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getMoviesFailure(error))
    }
}

function* getMoviesByCategorySaga(action) {
    try {
        console.log('Get movies by category running...')
        const res = yield call(apis.getMoviesByCategory, action.payload)
        if (res.status === 200) {
            console.log('Get movies by category successfully')
            yield put(actions.getMoviesByCategorySuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getMoviesByCategoryFailure(error))
    }
}

function* searchMoviesSaga(action) {
    try {
        console.log('Search movies running...')
        const res = yield call(apis.searchMovies, action.payload)
        if (res.status === 200) {
            console.log('Search movies successfully')
            yield put(actions.searchMoviesSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.searchMoviesFailure(error))
    }
}

function* updateMovieSaga(action) {
    try {
        console.log('Update movies running...')
        const res = yield call(apis.updateMovie, action.payload)
        if (res.status === 200) {
            console.log('Update movies successfully')
            yield put(actions.updateMovieSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.updateMovieFailure(error))
    }
}

function* deleteMovieSaga(action) {
    try {
        console.log('Delete movies running...')
        const res = yield call(apis.deleteMovie, action.payload)
        if (res.status === 200) {
            console.log('Delete movies successfully')
            yield put(actions.deleteMovieSuccess({ movieId: action.payload.movieId }))
        }
    } catch (error) {
        yield put(actions.deleteMovieFailure(error))
    }
}

const movieSaga = [
    takeLatest(types.ADD_MOVIE_START, addMovieSaga),
    takeLatest(types.GET_MOVIES_START, getMoviesSaga),
    takeLatest(types.GET_MOVIES_BY_CATEGORY_START, getMoviesByCategorySaga),
    takeLatest(types.SEARCH_MOVIES_START, searchMoviesSaga),
    takeLatest(types.UPDATE_MOVIE_START, updateMovieSaga),
    takeLatest(types.DELETE_MOVIE_START, deleteMovieSaga),
]

export default movieSaga