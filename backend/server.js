const express = require ('express')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require ('./middleware/errorMiddleware')
const app = express()

// Adding middleware to use body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/projects', require('./routes/projectsRoute'))

// Overwrite the default handler with custom errorHandler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))