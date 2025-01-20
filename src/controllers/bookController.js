import { createBook, getBook } from "../repositories/book.js"

export const getBookController = async (req, res) => {
    try {
        const book = await getBook()
        res.json({
            book: book
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const createBookController = async (req, res) => {
    try {
        const bookData = req.body
        const book = await createBook(bookData)
        res.json({
            message: 'Added Successfully',
            book: book
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}