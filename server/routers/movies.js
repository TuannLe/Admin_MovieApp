import express from 'express';
import { movieController } from '../controllers/movieController.js';
import { middlewareController } from '../controllers/middlewareController.js';

const router = express.Router();

router.post('/create', middlewareController.verifyTokenAndAdminAuth, movieController.addMovie)
router.get('/get-all', middlewareController.verifyTokenAndAdminAuth, movieController.getMovies)
router.get('/:id/get-by-category', middlewareController.verifyTokenAndAdminAuth, movieController.getMoviesByCategory)
router.post('/searchMovie', middlewareController.verifyTokenAndAdminAuth, movieController.searchMovies)
router.post('/update', middlewareController.verifyTokenAndAdminAuth, movieController.updateMovie)
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, movieController.deleteMovie)

export default router;