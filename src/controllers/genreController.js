import { createGenre, getGenre, getGenreById, updateGenre, deleteGenre } from "../repositories/genre.js";

export const getGenreController = async (req, res) => {
    try {
        const genre = await getGenre()
        res.json({
            genre: genre
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const getGenreByIdController = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const genre = await getGenreById(id)
        res.json({
            genre: genre
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const createGenreController = async (req, res) => {
    try {
        const genreData = req.body
        const genre = await createGenre(genreData)
        res.json({
            message: 'Added Successfully',
            genre: genre
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const updateGenreController = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const genreData = req. body
        const genre = await updateGenre(id, genreData)
        res.json({
            message: 'Updated Successfully', 
            genre: genre
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const deleteGenreController = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const genre = await deleteGenre(id)
        res.json({
            message: 'Deleted Successfully', 
            genre: genre
        })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}