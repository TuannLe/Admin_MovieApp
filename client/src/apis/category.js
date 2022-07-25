import AXIOS from './index'

const url = '/categories'

export const addCategory = async (payload) => {
    console.log(payload)
    try {
        const res = await AXIOS.post(`${url}/create`, payload, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getCategories = async (payload) => {
    try {
        const res = await AXIOS.get(`${url}/get-all`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const editCategory = async (payload) => {
    try {
        const res = await AXIOS.post(`${url}/edit`, payload, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const deleteCategory = async (payload) => {
    console.log(payload)
    try {
        const res = await AXIOS.delete(`${url}/${payload.categoryId}`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}