import prisma from "../utils/prismaClient.js";

export const getBook =  async () => {
    return await prisma.book.findMany({
        include: {
            author: true,
            genre: true
        }
    })
}

export const createBook = async (bookData) => {
    return await prisma.book.create({
        data: {
            title: bookData.title,
            genre_id: Number(bookData.genre_id),
            author_id: Number(bookData.author_id)
        }
    })
}