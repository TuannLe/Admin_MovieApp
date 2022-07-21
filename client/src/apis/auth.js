import AXIOS from './index'

export const signIn = async (payload) => {
    try {
        const res = await AXIOS.post('/auth/login', payload)
        return res
    } catch (error) {
        return error
    }
}