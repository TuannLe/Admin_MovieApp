import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    link360: String,
    link720: String,
    link1080: String,
    categoryId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    directors: Array,
    casts: Array,
    status: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true })

export const MovieModel = mongoose.model('Movies', schema);