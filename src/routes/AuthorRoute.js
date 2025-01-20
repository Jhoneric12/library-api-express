import express from 'express'
import { createAuthorController, getAuthorController, updateAuthorController, deleteAuthorController, getAuthorByIdController } from '../controllers/authorController.js'

const router = express.Router()

router.get('/get-author', getAuthorController)
router.get('/get-author/:id', getAuthorByIdController)
router.post('/create-author', createAuthorController)
router.put('/update-author/:id', updateAuthorController)
router.delete('/delete-author/:id', deleteAuthorController)

export default router