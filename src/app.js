import express from 'express'
import 'dotenv/config'
import AuthorRoute from './routes/AuthorRoute.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json()) 

app.use('/api', AuthorRoute)

app.listen(PORT, () => {
    console.log(`Port is running in ${PORT}`)
})