import { updateAuthor } from "../repositories/author.js"

export const updateAuthorService = async (id, authorData) => {
    if (authorData.bio == "Yambee") {
        throw new Error('Invalid')
    }
    const update = await updateAuthor(id, authorData)
    return update
}