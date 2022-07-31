import AXIOS from "./index"

const url = '/movies'

export const addMovie = async (payload) => {
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

export const updateMovie = async (payload) => {
    try {
        const res = await AXIOS.post(`${url}/update`, payload, {
            headers: {
                'token': `Bearer ${payload.token}`
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