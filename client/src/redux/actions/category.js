import * as TYPES from '../constants/category'

// Add category
export const addCategoryStart = (payload) => {
    return {
        type: TYPES.ADD_CATEGORY_START,
        payload
    }
}

export const addCategorySuccess = (payload) => {
    return {
        type: TYPES.ADD_CATEGORY_SUCCESS,
        payload
    }
}

export const addCategoryFailure = (error) => {
    return {
        type: TYPES.ADD_CATEGORY_FAILURE,
        error
    }
}

// Get categories
export const getCategoriesStart = (payload) => {
    return {
        type: TYPES.GET_CATEGORIES_START,
        payload
    }
}

export const getCategoriesSuccess = (payload) => {
    return {
        type: TYPES.GET_CATEGORIES_SUCCESS,
        payload
    }
}

export const getCategoriesFailure = (error) => {
    return {
        type: TYPES.GET_CATEGORIES_FAILURE,
        error
    }
}

// Edit category
export const editCategoryStart = (payload) => {
    return {
        type: TYPES.EDIT_CATEGORY_START,
        payload
    }
}

export const editCategorySuccess = (payload) => {
    return {
        type: TYPES.EDIT_CATEGORY_SUCCESS,
        payload
    }
}

export const editCategoryFailure = (error) => {
    return {
        type: TYPES.EDIT_CATEGORY_FAILURE,
        error
    }
}

// Delete category
export const deleteCategoryStart = (payload) => {
    return {
        type: TYPES.DELETE_CATEGORY_START,
        payload
    }
}

export const deleteCategorySuccess = (payload) => {
    return {
        type: TYPES.DELETE_CATEGORY_SUCCESS,
        payload
    }
}

export const deleteCategoryFailure = (error) => {
    return {
        type: TYPES.DELETE_CATEGORY_FAILURE,
        error
    }
}