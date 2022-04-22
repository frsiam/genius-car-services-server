const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;
require('dotenv').config();
const app = express();

// midlleware 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running genius server');
});
app.listen(port, () => {
    console.log('Listening from port', port);
})