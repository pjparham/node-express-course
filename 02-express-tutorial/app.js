const express = require('express')
const app = express();
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return {id, name, image}
    })
    return res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    const { productID, reviewId } = req.params
    console.log(req.params, productID, reviewId)
    res.send('hello world')
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000...');
})