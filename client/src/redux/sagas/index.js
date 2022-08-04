import { all } from 'redux-saga/effects'
import authSaga from './authSaga'
import categorySaga from './categorySaga'
import movieSaga from './MovieSaga'

export default function* mySaga() {
    yield all([
        ...authSaga,
        ...categorySaga,
        ...movieSaga
    ])
}