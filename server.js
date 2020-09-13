const express = require('express')
let app = express()

app.use(express.static('./dist/project1'))

app.get("/*", (req ,res) => res.sendFile( 'index.html', {root: './dist/project1'}))

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}`))