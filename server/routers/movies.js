import express from 'express';
import multer from 'multer';
import { movieController } from '../controllers/movieController.js';
import { middlewareController } from '../controllers/middlewareController.js';

const router = express.Router();
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        const filename = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, filename + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage })

router.post('/create', upload.array("poster"), middlewareController.verifyTokenAndAdminAuth, movieController.addMovie)
router.get('/get-all', middlewareController.verifyToken, movieController.getMovies)
router.get('/:id/get-by-category', middlewareController.verifyToken, movieController.getMoviesByCategory)
router.get('/:docId/get-link-movie', middlewareController.verifyToken, movieController.getLinkMovie)
router.post('/get-link', middlewareController.verifyToken, movieController.getLink)
router.post('/searchMovie', middlewareController.verifyToken, movieController.searchMovies)
router.post('/update', upload.array("poster"), middlewareController.verifyTokenAndAdminAuth, movieController.updateMovie)
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, movieController.deleteMovie)

export default router;