import express from 'express'
import 'dotenv/config'
import AuthorRoute from './routes/AuthorRoute.js'
import GenreRoute from './routes/GenreRoute.js'
import BookRoute from './routes/BookRoute.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json()) 

app.use('/api', AuthorRoute)
app.use('/api', GenreRoute)
app.use('/api', BookRoute)

app.listen(PORT, () => {
    console.log(`Port is running in ${PORT}`)
})