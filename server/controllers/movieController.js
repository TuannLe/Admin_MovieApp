import { MovieModel } from '../models/MovieModel.js';

export const movieController = {
    addMovie: async (req, res) => {
        try {
            const newMovie = {
                movieName: req.body.movieName,
                category: req.body.category,
                description: req.body.description,
                directors: req.body.directors,
                casts: req.body.casts,
                status: req.body.status,
            }
            const movie = new MovieModel(newMovie)
            await movie.save()
            const movies = await MovieModel.find()
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getMovies: async (req, res) => {
        try {
            const movies = await MovieModel.find()
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getDetail: async (req, res) => {
        try {

        } catch (error) {

        }
    },
    getMoviesByCategory: async (req, res) => {
        try {
            const movies = await MovieModel.find({ category: req.params.id })
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateMovie: async (req, res) => {
        try {
            const updateMovie = {
                _id: req.body._id,
                movieName: req.body.movieName,
                category: req.body.category,
                description: req.body.description,
                directors: req.body.directors,
                casts: req.body.casts,
                status: req.body.status,
            }
            await MovieModel.findOneAndUpdate({ _id: req.body._id }, updateMovie, { new: true })
            const movies = await MovieModel.find()
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const _id = req.params.id
            await MovieModel.findByIdAndDelete(_id)
            res.status(200).send('The movie has been deleted')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}