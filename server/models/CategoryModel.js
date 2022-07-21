import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        maxlength: 100,
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true })

export const CategoryModel = mongoose.model('Categories', schema)