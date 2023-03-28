const express = require('express')
const app = express();
const {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})
//parse json
app.use(express.json())

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'Please provide name value'})
    }
    res.status(201).json({sucesss: true, person: name})
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body
    if(!name){
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value'})
    }
    else {
        res.status(201).json({sucesss: true, data: [...people, name]})
    }
})


app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name){
        return res.status(200).send(`<h1>Welcome ${name}</h1>`)
    }
    res.status(401).send('Please Provide Credentials ')
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000...');
})