import AXIOS from "./index"

const url = '/movies'

export const addMovie = async ({ token, formData }) => {
    try {
        const res = await AXIOS.post(`${url}/create`, formData, {
            headers: {
                'token': `Bearer ${token}`,
                'Content-Type': `multipart/form-data`,
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getMovies = async (payload) => {
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

export const getMoviesByCategory = async (payload) => {
    try {
        const res = await AXIOS.get(`${url}/${payload.categoryId}/get-by-category`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getLinkMovie = async (payload) => {
    try {
        const res = await AXIOS.get(`${url}/${payload.docId}/get-link-movie`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const searchMovies = async (payload) => {
    try {
        const res = await AXIOS.post(`${url}/search`, payload, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const updateMovie = async ({ token, formData }) => {
    try {
        const res = await AXIOS.post(`${url}/update`, formData, {
            headers: {
                'token': `Bearer ${token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const deleteMovie = async (payload) => {
    try {
        const res = await AXIOS.delete(`${url}/${payload.movieId}`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}