const express = require('express')

const port = 9000

const app = express()

app.get('/profile', (req, res) => {
    res.json({
        name: 'Angel Carrasco',
        age: 34,
        country: 'Dominican Republic'
    })
})

app.post('/empresas', (req, res) => {
    res.json([
        'Google', 
        'Amazon',
        'Meta'
    ])
})

app.patch('/hobbies', (req, res) => {
    res.json([
        'Escuchar Musica', 
        'Ver Peliculas',
        'Escuchar la Biblia'
    ])
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})