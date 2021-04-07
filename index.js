require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mysql = require("mysql")

// Connect to database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})
db.connect((err) => {
  if (err) {
    console.log("! Error connecting to the database")
    process.exit(1)
  } else console.log("> Connected correctly to the database")
})
global.db = db

app.use(bodyParser.json())

// Error Handler
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(500).json({
      message: "Unexpected error",
    })
  } else return res.send(err)
})

// Start server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`> Ready on port: ${port}`)
})
