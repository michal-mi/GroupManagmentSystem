const userRoutes = require("./routes/users")
const memberRoutes = require("./routes/members")
const groupRoutes = require("./routes/groups")
const authRoutes = require("./routes/auth")

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))
const connection = require('./db')
const { connections } = require("mongoose")
connection()
app.use("/api/users", userRoutes)
app.use("/api/members", memberRoutes)
app.use("/api/groups", groupRoutes)
app.use("/api/auth", authRoutes)


