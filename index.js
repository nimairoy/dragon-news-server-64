const express = require('express')
const app = express()
const port = 5000

const news = require('./data/news.json');
const categories = require('./data/categories.json');
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => {
    res.send('The Dragon News Server is Running!!!')
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    console.log(id)
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews);
    }

})


app.listen(port, () => {
    console.log('Server is running on port', port);
})