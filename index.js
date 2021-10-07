const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// app.set('view engine', 'eja');

app.listen(port, () => console.log(`Server listening to localhost:${port}`));

app.get('/', (req, res) => res.render('index.ejs'));
app.get('/about', (req, res) => res.render('about.ejs'));
app.get('/contact', (req, res) => res.render('contact.ejs'));


app.use((req, res, next) => {
    return res.status(404).render(`err404.ejs`, { url: req.url })
});
