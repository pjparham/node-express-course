const express = require('express')
const app = express();
const logger = require('./logger')

// req => middleware => res
// order matters -> if this is below an app.get it wont apply to it
// app.use(logger)
app.use('/api', logger) // first arg is optional, but if applied it will affect all routes beginning with this

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('products')
})

app.get('/api/items', (req, res) => {
    res.send('items')
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000...');
})