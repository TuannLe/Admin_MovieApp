import { MovieModel } from '../models/MovieModel.js';
import { CategoryModel } from '../models/CategoryModel.js';
import queryString from 'query-string'
import axios from 'axios'
import fs from 'fs'
import path from 'path';


export const movieController = {
    addMovie: async (req, res) => {
        try {
            const image = fs.readFileSync(req.files[0].path, { encoding: 'base64' })
            const castString = req.body.casts
            const arrayCast = castString.split(',')

            const newMovie = {
                movieName: req.body.movieName,
                poster: image,
                docId: req.body.docId,
                categoryId: req.body.categoryId,
                description: req.body.description,
                directors: req.body.directors,
                casts: arrayCast,
                status: req.body.status,
            }
            let movie = new MovieModel(newMovie)
            await movie.save()
            MovieModel.aggregate([{
                $lookup: {
                    from: "categories",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "category"
                }
            }]).exec(function (err, movies) {
                res.status(200).json(movies)
            });
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getMovies: (req, res) => {
        MovieModel.aggregate([{
            $lookup: {
                from: "categories",
                localField: "categoryId",
                foreignField: "_id",
                as: "category"
            }
        }]).exec(function (err, movies) {
            res.status(200).json(movies)
        });
    },
    getLink: async (req, res) => {
        try {
            const link = req.body.link
            const arrayLink = []
            const linkParse = queryString.parse(link).fmt_stream_map
            arrayLink.push(linkParse.slice(linkParse.indexOf('https:'), linkParse.indexOf(',')))
            arrayLink.push(linkParse.slice(linkParse.indexOf('22|https:') + 3, linkParse.indexOf(',37')))
            arrayLink.push(linkParse.slice(linkParse.lastIndexOf('https:'), linkParse.length))
            res.status(200).json(arrayLink)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getMoviesByCategory: async (req, res) => {
        try {
            const movies = await MovieModel.find({ categoryId: req.params.id })
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getLinkMovie: async (req, res) => {
        try {
            const docId = req.params.docId
            axios
                .get(`https://drive.google.com/u/0/get_video_info?docid=${docId}`)
                .then((db) => {
                    const arrayLink = []
                    const response = db.data
                    const linkParse = queryString.parse(response).fmt_stream_map
                    arrayLink.push(linkParse.slice(linkParse.indexOf('https:'), linkParse.indexOf(',')))
                    arrayLink.push(linkParse.slice(linkParse.indexOf('22|https:') + 3, linkParse.indexOf(',37')))
                    arrayLink.push(linkParse.slice(linkParse.lastIndexOf('https:'), linkParse.length))
                    res.status(200).json(arrayLink)
                })
                .catch(error => {
                    console.error(error);
                });
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
        const image = fs.readFileSync(req.files[0].path, { encoding: 'base64' })
        try {
            const updateMovie = {
                _id: req.body._id,
                movieName: req.body.movieName,
                docId: req.body.docId,
                poster: image,
                categoryId: req.body.categoryId,
                description: req.body.description,
                directors: req.body.directors,
                casts: req.body.casts,
                status: req.body.status,
            }
            await MovieModel.findOneAndUpdate({ _id: req.body._id }, updateMovie, { new: true })
            MovieModel.aggregate([{
                $lookup: {
                    from: "categories",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "category"
                }
            }]).exec(function (err, movies) {
                res.status(200).json(movies)
            });
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