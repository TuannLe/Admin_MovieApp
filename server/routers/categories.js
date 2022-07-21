import express from 'express';
import { categoryController } from '../controllers/categoriesController.js';
import { middlewareController } from '../controllers/middlewareController.js';

const router = express.Router();

router.post('/create', middlewareController.verifyTokenAndAdminAuth, categoryController.addCategory)
router.get('/get-all', middlewareController.verifyTokenAndAdminAuth, categoryController.getCategories)
router.post('/edit', middlewareController.verifyTokenAndAdminAuth, categoryController.editCategory)
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, categoryController.deleteCategory)

export default router