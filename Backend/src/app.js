const express = require ('express')
const aiRoute = require('./routes/ai.route')

const app = express();

app.use('/ai', aiRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = app;