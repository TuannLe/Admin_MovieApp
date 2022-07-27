import { INIT_STATE } from '../constants'
import * as TYPES from '../constants/category'

export default function categoryReducers(state = INIT_STATE.category, action) {
    switch (action.type) {
        // Add category
        case TYPES.ADD_CATEGORY_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false
            }
        case TYPES.ADD_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Get categories
        case TYPES.GET_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload,
                error: false
            }
        case TYPES.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Edit category
        case TYPES.EDIT_CATEGORY_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.EDIT_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload,
                error: false
            }
        case TYPES.EDIT_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Delete category
        case TYPES.DEL_CATEGORY_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.DEL_CATEGORY_SUCCESS:
            const newListCategory = [...state.categories]
            console.log(newListCategory)
            console.log(action.payload.categoryId)
            newListCategory.splice(newListCategory.findIndex((item) => {
                return item._id === action.payload.categoryId
            }), 1)
            console.log(newListCategory)
            return {
                ...state,
                isLoading: false,
                categories: newListCategory,
                error: false
            }
        case TYPES.DEL_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}