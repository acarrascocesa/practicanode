const express = require('express')

const port = 9000

const app = express()

app.get('/profile', (req, res) => {
    // req contiene la informacion del cliente
    res.json({
        name: 'Angel Carrasco',
        age: 34,
        country: 'Dominican Republic'
    })
})

app.post('/ejemplo', (req, res) => {
    res.json([
        'Google', 
        'Amazon',
        'Meta'
    ])
})

app.patch('/ejemplo', (req, res) => {
    res.json([
        'Escuchar Musica', 
        'Ver Peliculas',
        'Escuchar la Biblia'
    ])
})

// Este listen va estar hasta abajo de nuestro app.js
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})