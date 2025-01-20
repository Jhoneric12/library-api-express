import prisma from "../utils/prismaClient.js"

export const getGenre = async () => {
    return await prisma.genre.findMany()
}

export const getGenreById = async (id) => {
    return await prisma.genre.findUnique({
        where: {
            id: id
        }
    })
}

export const createGenre = async (genreData) => {
    return await prisma.genre.create({
        data: {
            name: genreData.name,
            description: genreData.description
        }
    })
}

export const updateGenre = async (id, genreData) => {
    return await prisma.genre.update({
        where: {
            id: id
        },
        data: {
            name: genreData.name,
            description: genreData.description
        }
    })
}

export const deleteGenre = async (id) => {
    return await prisma.genre.delete({
        where: {
            id: id
        }
    })
}