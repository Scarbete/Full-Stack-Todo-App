import express from 'express'
import mongoose from 'mongoose'
import mainRouter from './router/mainRouter.js'
import adminRouter from './admin.js'
import 'dotenv/config'
import chalk from 'chalk'

const PORT = process.env.PORT || 8080
const DB_URL = process.env.DB_URL

const app = express()

app.use(express.json())

app.use('/api', mainRouter)
app.use('/admin', adminRouter)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT)
    }
    catch (error) {
        throw new Error(error.message)
    }
}

startApp()
    .then(() => console.log(chalk.green(`\nСервер запущен на порту - http://localhost:${PORT}`)))
    .catch(error => console.log(chalk.red(error)))