const express = require('express')
const path = require('path')
const app = express()
// setup static and middleware 
app.use(express.static('./public'))



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})
// app.get('/about', (req, res) => {
//     res.status(200).send('<h1>About Page</h1>')
// })

app.listen(8000, ()=> {
    console.log('server is listening on port 8000')
})

//common methods
// app.get
// app.put
// app.post
// app.delete
// app.all
// app.use
// app.listen