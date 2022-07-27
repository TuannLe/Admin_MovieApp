import { CategoryModel } from '../models/CategoryModel.js';

export const categoryController = {
    addCategory: async (req, res) => {
        try {
            const newCategory = {
                categoryName: req.body.categoryName,
                status: req.body.status
            }
            const category = new CategoryModel(newCategory)
            await category.save()
            res.status(200).json(category)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getCategories: async (req, res) => {
        try {
            const categories = await CategoryModel.find()
            res.status(200).json(categories)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    editCategory: async (req, res) => {
        try {
            const editCategory = {
                _id: req.body._id,
                categoryName: req.body.categoryName,
                status: req.body.status,
            }
            await CategoryModel.findOneAndUpdate({ _id: editCategory._id }, editCategory, { new: true })
            const categories = await CategoryModel.find()
            res.status(200).json(categories)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const _id = req.params.id
            await CategoryModel.findByIdAndDelete(_id)
            res.status(200).json('The category has been delete')
        } catch (error) {
            res.status(500).json(error)
        }
    },
    changeStatusCategory: async (req, res) => {
        try {
            const changeStatus = {
                _id: req.body._id,
                status: !req.body.status,
            }
            const newCategory = await CategoryModel.findByIdAndUpdate({ _id: changeStatus._id }, changeStatus, { new: true })
            res.status(200).json(newCategory)
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}