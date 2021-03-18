// imports
const express = require('express')
const app = express()
const port = 3000

// listen on port 3000
app.listen(port, () => console.info('Listen on port 3000'))


// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('/index', (req, res)=>{
    res.sendFile(__dirname +'/views/index.html')
})

app.get('/about', (req, res)=>{
    res.sendFile(__dirname +'/views/about.html')
})