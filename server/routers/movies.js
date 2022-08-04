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
router.get('/get-all', middlewareController.verifyTokenAndAdminAuth, movieController.getMovies)
router.get('/:id/get-by-category', middlewareController.verifyTokenAndAdminAuth, movieController.getMoviesByCategory)
router.post('/searchMovie', middlewareController.verifyTokenAndAdminAuth, movieController.searchMovies)
router.post('/update', middlewareController.verifyTokenAndAdminAuth, movieController.updateMovie)
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, movieController.deleteMovie)

export default router;