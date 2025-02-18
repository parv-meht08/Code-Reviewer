const express = require ('express')
const aiRoute = require('./routes/ai.route')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/ai', aiRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = app;