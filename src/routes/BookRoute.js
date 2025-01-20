import express from 'express'
import { createBookController, getBookController } from '../controllers/bookController.js'

const router = express.Router()

router.get('/get-book', getBookController)
router.post('/create-book', createBookController)

export default router