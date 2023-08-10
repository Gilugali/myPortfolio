const express = require('express')
const path = require('path')

const app = express()

app.use('/html', express.static('html'))
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use('/images', express.static('images'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/html/index.html'))
})


app.listen(3000, ()=>{
    console.log("it is running")
}) 