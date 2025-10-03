const express = require('express')
const app = express()

// The data that is coming from the frontend is not directly readable by the backend it's like a blob. So to make it readable, we need to parse the data.
// We use middleware to parse the data coming from the frontend. Express has built-in middleware for parsing JSON and URL-encoded data.
app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }))// Middleware to parse URL-encoded bodies


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)





// Form handling and working with forms
// handle backend process of forms and making sure the data is coming from any frontend library, framwork, templating engine, we still handle it at the backend by making some changes

// cookies, session
// NOTE: We installed cookie-parser here