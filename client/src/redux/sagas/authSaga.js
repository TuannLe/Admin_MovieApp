import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/auth'
import * as apis from '../../apis/auth'
import * as TYPES from '../constants/auth'

function* fetchLoginSaga(action) {
    try {
        console.log('Fetching login running...')
        const res = yield call(apis.signIn, action.payload)
        if (res.status === 200) {
            console.log("Login success")
            yield put(actions.SignInSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.SignInFailure(error))
    }
}

const authSaga = [
    takeLatest(TYPES.SIGN_IN_START, fetchLoginSaga),
]

export default authSaga