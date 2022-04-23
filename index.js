const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 4000;
require('dotenv').config();
const app = express();

// midlleware 
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:<password>@cluster0.mdofc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('Genius car database connected')
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send('Running genius server');
});
app.listen(port, () => {
    console.log('Listening from port', port);
})