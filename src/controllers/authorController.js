import { createAuthor, getAuthor, updateAuthor, deleteAuthor, getAuthorById } from "../repositories/author.js"

export const getAuthorController = async (req, res) => {
    try {
        const authorData = await getAuthor()
        res.json({
            author: authorData
        })
    }
    catch (error) {
        res.json({error: error.message})
    }
}

export const getAuthorByIdController = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const author = await getAuthorById(id)
        res.json({
            author: author
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const createAuthorController = async (req, res) => {
    try {
        const authorData = req.body
        const author = await createAuthor(authorData)
        res.status(201).json({
            message: 'Added Successfully',
            author: author
        })
    }
    catch (error) {
        res.json({error: error.message})
    }
}

export const updateAuthorController = async (req, res) => {
    try {
        const authorData = req.body
        const id = Number(req.params.id)
        const author = await updateAuthor(id, authorData)
        res.json({
            message: 'Updated Successfully',
            author: author
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const deleteAuthorController = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const authorDelete = await deleteAuthor(id)
        res.json({
            message: 'Deleted Successfully',
            author: authorDelete
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}