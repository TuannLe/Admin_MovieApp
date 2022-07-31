export const INIT_STATE = {
    auth: {
        currentUser: {},
        isLoading: false,
        message: '',
        error: false
    },
    category: {
        categories: [],
        data: {},
        isLoading: false,
        error: false
    },
    movie: {
        movies: [],
        moviesByCategory: [],
        moviesSearch: [],
        isLoading: false,
        error: false
    }
}