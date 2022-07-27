import express from 'express';
import { movieController } from '../controllers/movieController.js';
import { middlewareController } from '../controllers/middlewareController.js';

const router = express.Router();

router.post('/create', middlewareController.verifyTokenAndAdminAuth, movieController.addMovie)
router.get('/get-all', middlewareController.verifyTokenAndAdminAuth, movieController.getMovies)
router.get('/:id/get-by-id', middlewareController.verifyTokenAndAdminAuth, movieController.getMoviesByCategory)
router.post('edit', middlewareController.verifyTokenAndAdminAuth, movieController.updateMovie)
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, movieController.deleteMovie)
