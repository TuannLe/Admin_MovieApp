import express from 'express';
import { userController } from '../controllers/userController.js'
import { middlewareController } from '../controllers/middlewareController.js'

const router = express.Router();

router.put('/:id/favorites-movie', middlewareController.verifyToken, userController.favorites)
router.put('/:id/watching-movie', middlewareController.verifyToken, userController.watching)

export default router