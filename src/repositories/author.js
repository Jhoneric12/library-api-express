import prisma from "../utils/prismaClient.js"

export const getAuthor = async () => {
    return await prisma.author.findMany()
}

export const getAuthorById = async (id) => {
    return await prisma.author.findUnique({
        where: {
            id: id
        }
    })
}

export const createAuthor = async (authorData) => {
    return await prisma.author.create({
        data: {
            name: authorData.name,
            bio: authorData.bio,
            birth_date: new Date(authorData.birth_date)
        }
    })
}

export const updateAuthor = async (id, authorData) => {
    return await prisma.author.update({
        where: {
            id: id
        },
        data: {
            name: authorData.name,
            bio: authorData.bio,
            birth_date: new Date(authorData.birth_date)
        }
    })
}

export const deleteAuthor = async (id) => {
    return await prisma.author.delete({
        where: {
            id: id
        }
    })
}