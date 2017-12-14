const express = require('express')
const app = express()

app.get('/*/**.css', (req, res) => res.sendFile(req.path, {root: __dirname }))
app.get('/exercises/*', (req, res) => res.sendFile(`${req.path}/index.html`, {root: __dirname }))
app.get('/answers/*', (req, res) => res.sendFile(`${req.path}/index.html`, {root: __dirname }))
app.get('/assets/*', (req, res) => res.sendFile(req.path, {root: __dirname }))
app.get('/', (req, res) => res.sendFile('index.html', {root: __dirname }))

app.use(express.static('./exercises'))

app.listen(3000, () => console.log('App listening on port 3000 🎉'))