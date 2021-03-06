import { MovieModel } from '../models/MovieModel.js';
import queryString from 'query-string'


export const movieController = {
    addMovie: async (req, res) => {
        try {
            const link = req.body.link
            const linkParse = queryString.parse(link).fmt_stream_map
            const newLink360 = linkParse.slice(linkParse.indexOf('https:'), linkParse.indexOf(','))
            const newLink720 = linkParse.slice(linkParse.indexOf('22|https:') + 3, linkParse.indexOf(',37'))
            const newLink1080 = linkParse.slice(linkParse.lastIndexOf('https:'), linkParse.length)
            const newMovie = {
                movieName: req.body.movieName,
                poster: req.body.poster,
                link360: newLink360,
                link720: newLink720,
                link1080: newLink1080,
                categoryId: req.body.categoryId,
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
    getMoviesByCategory: async (req, res) => {
        try {
            const movies = await MovieModel.find({ category: req.params.id })
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    searchMovies: async (req, res) => {
        try {
            let movieName = new RegExp('^' + req.body.movieName)
            MovieModel.find({ movieName: { $regex: movieName } })
                .then(movies => {
                    res.json(movies)
                })
                .catch(error => {
                    console.log(error)
                })
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