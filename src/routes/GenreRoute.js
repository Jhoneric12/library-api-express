import express from 'express'
import { createGenreController, getGenreController, getGenreByIdController, updateGenreController, deleteGenreController } from '../controllers/genreController.js'

const router = express.Router()

router.get('/get-genre', getGenreController)
router.get('/get-genre/:id', getGenreByIdController)
router.post('/create-genre', createGenreController)
router.put('/update-genre/:id', updateGenreController)
router.delete('/delete-genre/:id', deleteGenreController)

export default router