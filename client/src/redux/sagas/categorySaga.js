import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/category'
import * as apis from '../../apis/category'
import * as types from '../constants/category'

// Add category
function* addCategorySaga(action) {
    try {
        console.log('Add category running...')
        const res = yield call(apis.addCategory, action.payload)
        if (res.status === 200) {
            console.log('Add category successfully')
            yield put(actions.addCategorySuccess(res.data))
        }
    } catch (error) {
        yield put(actions.addCategoryFailure(error))
    }
}

function* getCategoriesSaga(action) {
    try {
        console.log('Get categories running...')
        const res = yield call(apis.getCategories, action.payload)
        if (res.status === 200) {
            console.log('Get categories successfully')
            yield put(actions.getCategoriesSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getCategoriesFailure(error))
    }
}

function* editCategorySaga(action) {
    try {
        console.log('Edit category running...')
        const res = yield call(apis.editCategory, action.payload)
        if (res.status === 200) {
            console.log('Edit category successfully')
            yield put(actions.editCategorySuccess(res.data))
        }
    } catch (error) {
        yield put(actions.editCategoryFailure(error))
    }
}

function* deleteCategorySaga(action) {
    try {
        console.log('Delete category running...')
        const res = yield call(apis.deleteCategory, action.payload)
        if (res.status === 200) {
            console.log('Delete category successfully')
            console.log(res.data)
            yield put(actions.deleteCategorySuccess({ categoryId: action.payload.categoryId }))
        }
    } catch (error) {
        yield put(actions.deleteCategoryFailure(error))
    }
}

const categorySaga = [
    takeLatest(types.ADD_CATEGORY_START, addCategorySaga),
    takeLatest(types.GET_CATEGORIES_START, getCategoriesSaga),
    takeLatest(types.EDIT_CATEGORY_START, editCategorySaga),
    takeLatest(types.DEL_CATEGORY_START, deleteCategorySaga)
]

export default categorySaga