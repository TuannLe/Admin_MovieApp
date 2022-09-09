import { UserModel } from '../models/UserModel.js'
import { MovieModel } from '../models/MovieModel.js'

export const userController = {
    favorites: async (req, res) => {
        try {
            const user = await UserModel.findById(req.body.userId)
            if (!user.favorites.includes(req.params.id)) {
                await user.updateOne({ $push: { favorites: req.params.id } })
                res.status(200).json('The movie has been favorite')
            } else {
                await user.updateOne({ $pull: { favorites: req.params.id } })
                res.status(200).json('The movie has been remove from favorites')
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    watching: async (req, res) => {
        try {
            const user = await UserModel.findById(req.body.userId)
            if (!user.watching.includes(req.params.id)) {
                await user.updateOne({ $push: { watching: req.params.id } })
                res.status(200).json('The movie has been watching')
            } else {
                await user.updateOne({ $pull: { watching: req.params.id } })
                res.status(200).json('The movie has been remove from watching')
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getMoviesFavorite: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            const moviesFavorite = await Promise.all(
                user.favorites.map(movieId => {
                    return MovieModel.findById(movieId)
                })
            )
            res.status(200).json(moviesFavorite)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getMoviesWatching: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            const moviesFavorite = await Promise.all(
                user.watching.map(movieId => {
                    return MovieModel.findById(movieId)
                })
            )
            res.status(200).json(moviesFavorite)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}